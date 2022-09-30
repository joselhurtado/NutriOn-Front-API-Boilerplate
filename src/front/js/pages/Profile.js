import React from "react";
import "../../styles/dashboard.css";
import "../../styles/home.css";
import RecipeCollection from "/src/front/js/component/RecipeCollection.js";
import BMISection from "/src/front/js/component/BMISection.js";

export default function Profile() {
  return (
    <div className="container">
      <div className="container">
        <div className="row information-container">
          <div className="col-sm card text-center profile-pic-container">
            <img
              src="https://images.theconversation.com/files/478225/original/file-20220809-24-orxjcu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
              className="card-img-top text-center profile-pic"
              alt="..."
            />
            <div className="card-body">
              <h1 className="card-text">BEYONCE</h1>
              <h4></h4>
            </div>
          </div>
          <div className="col-sm">
            <h1 className="card-title text-center mt-1">My Information</h1>
            <div>
              <label
                for="exampleFormControlInput1"
                className="form-label fullName"
              >
                Full Name
              </label>
              <input
                type="text"
                className="form-control fullName"
                id="exampleFormControlInput1"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-3">
              <label
                for="exampleFormControlInput2"
                className="form-label usernameInput"
              >
                Username
              </label>
              <input
                type="text"
                className="form-control usernameInput"
                id="exampleFormControlInput2"
                placeholder="Username"
              />
            </div>
            <div className="mb-3">
              <label
                for="exampleFormControlInput3"
                className="form-label emailAddressInput"
              >
                Email Address
              </label>
              <input
                type="email"
                className="form-control emailAddressInput"
                id="exampleFormControlInput3"
                placeholder="name@example.com"
              />
            </div>
            <div className="otherInfo">
              <div className="mb-3">
                <label
                  for="exampleFormControlInput4"
                  className="form-label age2Input"
                >
                  Age
                </label>
                <input
                  type="text"
                  className="form-control age2Input"
                  id="exampleFormControlInput4"
                  placeholder="Age"
                />
              </div>
              <div className="mb-3">
                <label
                  for="exampleFormControlInput5"
                  className="form-label heightInput"
                >
                  Height
                </label>
                <input
                  type="text"
                  className="form-control heightInput"
                  id="exampleFormControlInput5"
                  placeholder="Height"
                />
              </div>
              <div className="mb-3">
                <label
                  for="exampleFormControlInput6"
                  className="form-label weightInput"
                >
                  Weight
                </label>
                <input
                  type="text"
                  className="form-control weightInput"
                  id="exampleFormControlInput6"
                  placeholder="Weight"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <BMISection />
        </div>

        {/* Diet and Calculator Section */}
      </div>

      <div>
        <RecipeCollection />
      </div>

      {/* Slider Meals Section */}

      <div className="col- favoriteCard">
        <div className="card">
          <div className="card-body d-flex justify-content-center align-items-center flex-column favoriteMeal">
            <h1 className="card-title text-center text-dark">
              My Favorite Meals
            </h1>
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner ">
                <div className="carousel-item active  " data-bs-interval="2000">
                  <img
                    src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=1200,1200"
                    className="d-block "
                    alt="..."
                  />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    src="https://images.theconversation.com/files/368263/original/file-20201109-22-lqiq5c.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                    className="d-block"
                    alt="..."
                  />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    src="https://colonydiner.com/wp-content/uploads/2021/03/French.jpg"
                    className="d-block"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
