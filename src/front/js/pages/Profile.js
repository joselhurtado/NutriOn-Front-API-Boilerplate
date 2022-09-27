import React from "react";
import "../../styles/dashboard.css";
import "../../styles/home.css";


export default function Profile() {
  return (
    <div className="container">
      <div className="container">
        <div className="row information-container">
          <div className="col-sm card text-center profile-pic-container" >
              <img
                src="https://images.theconversation.com/files/478225/original/file-20220809-24-orxjcu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                className="card-img-top text-center profile-pic"
                alt="..."
              />
               <div className="card-body">
                <h1 className="card-text">
                  BEYONCE
                </h1>
                <h4>
                  Nutrition Goals
                </h4>
            </div>
          </div>
          <div
            className="col-sm">
            <h1 className="card-title text-center mt-1">My Information</h1>
            <div><label for="exampleFormControlInput1" className="form-label fullName" >Full Name</label>
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
          </div>
        </div>

      { /* Diet and Calculator Section */}
        
        <div
          className="row bmiDiet">
          <div className="col-sm">
            <div className="card p personalDietCircle">
              <div className="card-body innerCircle">
                <h1 className="card-title text-center dietCircleTitle">Vegetarian Diet</h1>
                <p className="card-text text-center">My Weight Gain Journey</p>
                <div className="card-text-diet">
                  <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item">Age</li>
                    <li className="list-group-item">Weight</li>
                    <li className="list-group-item">Height</li>
                    <li className="list-group-item">Goal Weight</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card calorie-calculator">
              <h1 className="card-title text-center mt-4 mb-4">
                Calorie Calculator
              </h1>
              <div className="row">
                <h1 className="card-title text-center text-muted">
                  My Height
                </h1>
                <div className="col">
                  <label
                    for="exampleFormControlInput3"
                    className="form-label bmiAge"
                  ></label>
                  <input
                    type="text"
                    className="form-control feetInput"
                    id="exampleFormControlInput"
                    placeholder="FEET"
                  />
                </div>
                <div className="col">
                  <label
                    for="exampleFormControlInput3"
                    className="form-label"
                  ></label>
                  <input
                    type="text"
                    className="form-control inchesInput"
                    id="exampleFormControlInput"
                    placeholder="INCHES"
                  />
                </div>
              </div>
              <div className="col-sm">
                <h1 className="card-title text-center text-muted">
                  My Weight
                </h1>

                <label
                  for="exampleFormControlInput3"
                  className="form-label bmiAge"
                ></label>
                <input
                  type="text"
                  className="form-control ageInput"
                  id="exampleFormControlInput"
                  placeholder="lbs."
                />
              </div>
              <div className="container mb-4">
                <div className="row">
                <h1 className="card-title text-center text-muted">
                  gender
                </h1>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="form-check m-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios1"
                      value="option1"
                      checked
                    ></input>
                    <label className="form-check-label" for="gridRadios1">
                      Female
                    </label>
                  </div>
                  <div className="form-check m-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      value="option2"
                    ></input>
                    <label className="form-check-label" for="gridRadios2">
                      Male
                    </label>
                  </div>
                  <div className="form-check m-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gridRadios"
                      id="gridRadios3"
                      value="option3"
                    ></input>
                    <label className="form-check-label" for="gridRadios3">
                      Other
                    </label>
                  </div>
                </div>
              </div>

              <select
                className="form-select activity-level"
                aria-label="Default select example" >
                <option selected>Activity Level</option>
                <option value="1">Sedentary</option>
                <option value="2">Light</option>
                <option value="3">Moderate</option>
                <option value="4">Active</option>
              </select>

              <div className="d-flex justify-content-center m-4">
                <button
                  className="btn btn-orange"
                  type="button"
                >
                  Calculate
                </button>
                <button className="btn btn-orange-outline" type="button">
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      { /* Slider Meals Section */}

      <div className="col favoriteCard">
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
