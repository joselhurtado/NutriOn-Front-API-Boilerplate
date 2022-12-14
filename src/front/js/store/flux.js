
const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
				User:[],
				recipePopular: [],
				// recipeVegan: [],
				// recipeKeto: [],
				// recipePaleo: [],
				// recipeVegetarian: [],
				favorites: [],
		},
		actions: {
			getPopularRecipes: async () => { 			//New Function to Call Popular Recipes
				const response = await fetch(
					`https://api.spoonacular.com/recipes/random?apiKey=${process.env.APIfood}&number=12`
				);
				const payload = await response.json();
				setStore({recipePopular:payload.recipes})
				console.log(payload, "Payload Popular Recipes Flux")
			},

			// getVeganRecipes: async () => { 			//New Function to Call Vegan Recipes
			// 	const response = await fetch(
			// 		`https://api.spoonacular.com/recipes/complexSearch?query=vegan&apiKey=${process.env.APIfood}&number=6`
			// 	);
			// 	const payload = await response.json();
			// 	setStore({recipeVegan:payload.results})
			// 	console.log(payload, "Payload Vegan Recipes")
			// },

			// getKetoRecipes: async () => { 			//New Function to Call Keto Recipes
			// 	const response = await fetch(
			// 		`https://api.spoonacular.com/recipes/complexSearch?query=keto&apiKey=${process.env.APIfood}&number=6`
			// 	);
			// 	const payload = await response.json();
			// 	setStore({recipeKeto:payload.results})
			// 	console.log(payload, "Payload Keto Recipes")
			// },

			// getPaleoRecipes: async () => { 			//New Function to Call Paleo Recipes
			// 	const response = await fetch(
			// 		`https://api.spoonacular.com/recipes/complexSearch?query=paleo&apiKey=${process.env.APIfood}&number=6`
			// 	);
			// 	const payload = await response.json();
			// 	setStore({recipePaleo:payload.results})
			// 	console.log(payload, "Payload Paleo Recipes")
			// },

			// getVegetarianRecipes: async () => { 			//New Function to Call Vegetarian Recipes
			// 	const response = await fetch(
			// 		`https://api.spoonacular.com/recipes/complexSearch?query=vegetarian&apiKey=${process.env.APIfood}&number=6`
			// 	);
			// 	const payload = await response.json();
			// 	setStore({recipeVegetarian:payload.results})
			// 	console.log(payload, "Payload Vegetarian Recipes")
			// },

			addFavorites: (item) => {   			//Favorites Function
				const store = getStore();			//Access to the Store
				store.favorites.push(item)			//Push Item
				setStore(store)						//Save the Changes under Store (Update the State)
			},

			removeFavorites: index => {   			//Remove Favorites Function
				const store = getStore();
				let updatedList = store.favorites.filter(
					(item, i) => index != i
				);
				setStore({favorites:updatedList})	
			},	

			newUser: async () => { 			//New Function to Call Existing Users
				const response = await fetch(process.env.DATABASE_URL + "/api/signUp");
				const payload = await response.json();
				setStore({User:payload.results})
				console.log(payload, "New User Created on the Backend")
			},

			getUser: async () => { 			//New Function to Call New Users
				const response = await fetch(process.env.DATABASE_URL + "/api/getUser");
				const payload = await response.json();
				setStore({User:payload.results})
				console.log(payload, "Get existing User from Backend")
			},

		}	
	};
};

//* ABOVE THIS LINE LIVES THE NEW API ACTIONS CALLING OBJECTS *//

export default getState;