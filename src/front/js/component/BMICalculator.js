import React, { useState } from "react";

const BMICalculator = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const handleBmi = () => {
    let value = ((weight / (height * 12 + 10)) * 10).toFixed(1); //Basic Function to calculate BMI
    setBmi(value);

    if (value < 18.5) {
      setInfo(<div className="alert alert-success m-2">Under Weight</div>); //BMI bottom info Alert
    } else if (value > 18.5 && value <= 24.9) {
      setInfo(<div className="alert alert-info m-2">Healthy</div>);
    } else if (value > 24.9 && value < 30) {
      setInfo(<div className="alert alert-warning m-2">Overweight</div>);
    } else {
      setInfo(<div className="alert alert-danger m-2">Obese</div>);
    }
  };

  return (
    <div className="container">
      <div className="col-sm m-2">
        <label>Set Height in Feet</label>
        <input
          className="BMIinput"
          type="text"
          onChange={(e) => setHeight(e.target.value)}
          placeholder="5.10"
        />
      </div>

      <div className="col-sm m-2">
        <label>Set Weight in Pound</label>
        <input
          className="BMIinput"
          type="text"
          onChange={(e) => setWeight(e.target.value)}
          placeholder="150"
        />
      </div>

      <button className="container btn btn-orange mt-4" onClick={handleBmi}>
        Calculate BMI
      </button>
      <h4 className="mt-4">
        <strong>Your BMI is:</strong>
      </h4>
      <h1 className="align-middle m-2"></h1>
      <div className="BMIresult">{bmi}</div>
      <p className="m-2">
        <strong>Your Range info:</strong>
        <div className="alert">{info}</div>
      </p>
    </div>
  );
};

export default BMICalculator;
