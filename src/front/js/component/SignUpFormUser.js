import React, { useState, useEffect, useContext } from "react";
import { Context } from "/src/front/js/store/appContext.js";
import { useNavigate } from "react-router-dom";

// import axios from "./api/axios";
import "../../styles/SignUp.css";
import { Link } from "react-router-dom";

export function SignUpFormUser() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    emailsignup: "",
    userName: "",
    passWord: "",
    gender: "",
    weightgoal: "",
    sex: "",
  });

  useEffect(() => {
    console.log("store", store);
  }, []);

  const { store, actions } = useContext(Context); //Const to call store data from Flux (Actions is not used yet)

  // function submitForm(e) {
  //   e.preventDefault();
    // console.log("form data", data);
  //   console.log("user submitted");
  //   console.log("store data", store.usersignupstats);

  //   actions.addsignupData(data);

  //   console.log("usersing", store.usersignupstats);
  //   setStore: (data) =>
  //     setState({
  //       store: (store.usersignupstats, ["@13123", "#123123"]),
  //       actions: { ...state.actions },
  //     });
  // }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  let navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data", data);
    actions.addsignupData(data);
    navigate("/signupquestions");
  }
  return (
    // <form onSubmit={(e) => submitForm(e)}>
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <div className="form-user">
            <input
              onChange={(e) => handle(e)}
              id="firstName"
              value={data.firstName}
              className="form-control"
              type="text"
              placeholder="First Name"
              required
            ></input>
            <input
              onChange={(e) => handle(e)}
              id="lastName"
              value={data.lastName}
              className="form-control"
              type="text"
              placeholder="Last Name"
              required
            ></input>
          </div>
          <div className="Userinfo">
            <input
              onChange={(e) => handle(e)}
              id="emailsignup"
              value={data.email}
              className="form-control"
              type="email"
              placeholder="Enter your email"
              required
            ></input>
          </div>
          <div className="UserinfoPassword">
            <input
              onChange={(e) => handle(e)}
              id="userName"
              value={data.userName}
              className="form-control"
              type="text"
              placeholder="Enter username"
              required
            ></input>
            <input
              onChange={(e) => handle(e)}
              id="passWord"
              value={data.passWord}
              className="form-control"
              type="text"
              placeholder="Enter password"
              required
            ></input>
          </div>
        </div>
        <div className="weightgoal">
          <p className="weight-title">What is your weight goal?</p>
        </div>
        <div className="weightgoalbuttons">
          <div class="3btnweight">
            <button
              onClick={(e) => {
                setData({ ...data, weightgoal: "Lose weight" });
              }}
              value={"lose Weight"}
              class="btn btn-orange"
              type="button"
              id="weightbtn"
            >
              Lose Weight
            </button>
            <button
              onClick={(e) => {
                setData({ ...data, weightgoal: "Gain weight" });
              }}
              class="btn btn-orange"
              type="button"
              id="weightbtn"
            >
              Gain Weight
            </button>
            <button
              onClick={(e) => {
                setData({ ...data, weightgoal: "Maintain Weight" });
              }}
              class="btn btn-orange"
              type="button"
              id="weightbtn"
            >
              Maintain Weight
            </button>
            <div className="genderP">
              <p className="gender-title">What is your gender?</p>
            </div>
            <div className="Genderdiv">
              <button
                onClick={(e) => {
                  setData({ ...data, sex: "Male" });
                }}
                class="btn btn-orange"
                type="button"
                id="genderbtn"
              >
                Male
              </button>
              <button
                onClick={(e) => {
                  setData({ ...data, sex: "Female" });
                }}
                class="btn btn-orange"
                type="button"
                id="genderbtn"
              >
                Female
              </button>
              <button
                onClick={(e) => {
                  setData({ ...data, sex: "Other" });
                }}
                class="btn btn-orange"
                type="button"
                id="genderbtn"
              >
                Other
              </button>
            </div>
          </div>
        </div>
        <div className="SignupFormbtn">
          <button className="btn btn-orange" id="Questionbuttons1">
            Go Back
          </button>
          <button className="btn btn-orange" type="submit" id="Questionbuttons">
            Continue
          </button>
        </div>
      </div>
    </form>
  );
}

export default SignUpFormUser;
