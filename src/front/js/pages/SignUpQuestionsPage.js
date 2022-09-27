import React from "react";
import "../../styles/SignUp.css";
import { Link } from "react-router-dom";
import SignupFormQuestions from "../component/SignupFormQuestions";

export const SignUpQuestionsPage = () => {
  return (
    <SignupFormQuestions/>
    // <div id="welcomePage" className="heroWelcome">
    //   <div className="row mainHero">
    //     <div className="col-sm heroHeadline2">
    //       <h1 className="text-light text-center m-2">
    //         {" "}
    //         Tell us about yourself!
    //       </h1>

    //       <div className="SignupForm2">
    //         <div className="genderP">
    //           <p className="gender-title">Select your ideal diet?</p>
    //         </div>
    //         <div className="dietcheckboxes">
    //           <div className="form-check form-check-inline">
    //             <input
    //               className="form-check-input"
    //               type="checkbox"
    //               id="inlineCheckbox1"
    //               value="option1"
    //             ></input>
    //             <label className="form-check-label" for="inlineCheckbox1">
    //               Vegan
    //             </label>
    //           </div>
    //           <div className="form-check form-check-inline">
    //             <input
    //               className="form-check-input"
    //               type="checkbox"
    //               id="inlineCheckbox2"
    //               value="option2"
    //             ></input>
    //             <label className="form-check-label" for="inlineCheckbox2">
    //               Vegetarian
    //             </label>
    //           </div>
    //           <div class="form-check form-check-inline">
    //             <input
    //               className="form-check-input"
    //               type="checkbox"
    //               id="inlineCheckbox2"
    //               value="option2"
    //             ></input>
    //             <label className="form-check-label" for="inlineCheckbox2">
    //               Gluten Free
    //             </label>
    //           </div>
    //           <div class="form-check form-check-inline">
    //             <input
    //               className="form-check-input"
    //               type="checkbox"
    //               id="inlineCheckbox2"
    //               value="option2"
    //             ></input>
    //             <label className="form-check-label" for="inlineCheckbox2">
    //               Keto
    //             </label>
    //           </div>
    //           <div className="2nddietcheckboxes">
    //             <div className="form-check form-check-inline">
    //               <input
    //                 className="form-check-input"
    //                 type="checkbox"
    //                 id="inlineCheckbox1"
    //                 value="option1"
    //               ></input>
    //               <label className="form-check-label" for="inlineCheckbox1">
    //                 Paleo
    //               </label>
    //             </div>
    //             <div class="form-check form-check-inline">
                  // <input
                  //   className="form-check-input"
                  //   type="checkbox"
                  //   id="inlineCheckbox2"
                  //   value="option2"
                  // ></input>
                  // <label className="form-check-label" for="inlineCheckbox2">
                  //   Pescatarian
                  // </label>
    //             </div>
    //             <div class="form-check form-check-inline">
                  // <input
                  //   className="form-check-input"
                  //   type="checkbox"
                  //   id="inlineCheckbox2"
                  //   value="option2"
                  // ></input>
                  // <label className="form-check-label" for="inlineCheckbox2">
                  //   No restrictions
                  // </label>
    //             </div>
    //             <div className="BMItitle container align-between">
    //               <p className="BMIinfo ">
    //                 BODY MASS INDEX (BMI) IS A MEASURE OF BODY FAT BASED ON
    //                 HEIGHT AND WEIGHT THAT APPLIES TO ADULT MEN AND WOMEN
    //               </p>
    //             </div>
                // <div className="BMIheight">
                //   <input className="feet" placeholder="Feet"></input>
                //   <input className="inch" placeholder="Inches"></input>
                //   <input className="weightBtn" placeholder="Weight"></input>
                //   <input className="age" placeholder="Age"></input>
                // </div>
                // <div className="BMIinfo">
    //               <p className="BMIactivity">How active are you?</p>
    //               <div className="BMIactivitybtn">
                    // <div className="3btnweight">
                    //   <button
                    //     className="btnactivity"
                    //     value={"Light"}
                    //     type="button"
                    //     id="activitybtn"
                    //   >
                    //     Light
                    //   </button>
                    //   <button
                    //     className="btnactivity"
                    //     type="button"
                    //     id="activitybtn"
                    //   >
                    //     Moderate
                    //   </button>
                    //   <button
                    //     className="btnactivity"
                    //     type="button"
                    //     id="activitybtn"
                    //   >
                    //     Active
                    //   </button>
                    // </div>
    //                 <div>
    //                   <Link to="/SignupQuestionsGoals">
    //                     <div className="SignupFormbtn">
    //                       <button
    //                         className="btn btn-orange"
    //                         id="Questionbuttons1"
    //                       >
    //                         Go Back
    //                       </button>
    //                       <button
    //                         className="btn btn-orange"
    //                         id="Questionbuttons"
    //                       >
    //                         Continue
    //                       </button>
    //                     </div>
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SignUpQuestionsPage;
