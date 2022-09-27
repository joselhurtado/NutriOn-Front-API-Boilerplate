import React, { useState, useEffect, useContext } from "react";
import { Context } from "/src/front/js/store/appContext.js";
import { Link } from "react-router-dom";

export default function RecipeCardPopular() {
  const { store, actions } = useContext(Context); //Const to call store data from Flux (Actions is not used yet)
  const [recipes, setPopular] = useState([]); //UseState run the function from recipes (API)
  console.log(recipes, "Recipes Popular");
  useEffect(
    () => {
      setPopular(store.recipePopular);
    },
    [store.recipePopular] // In Here we call out again to keep stored the data on re-load the page
  );

  return (
    <div className="d-flex overflow-auto">
      {recipes.length > 0 &&
        recipes.map((x, i) => (
          <div
            key={i}
            className="card m-2 cardShape"
            style={{ minWidth: "18rem" }}
          >
            <img
              src={`https://spoonacular.com/recipeImages/${x.id}-556x370.${x.imageType}`}
              className="card-img-top shapeImageTop"
              alt="recipe Image"
            />
            <div className="card-body text-light">
              <h4 className="card-title">{x.title}</h4>
              <div className="d-flex justify-content-between">
                <Link to={`/recipe/${x.id}`} className="btn btn-orange">
                  Read More
                </Link>
                <a
                  onClick={() => actions.addFavorites(x)}
                  className="btn btn-outline-orange fa fa-heart"
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
