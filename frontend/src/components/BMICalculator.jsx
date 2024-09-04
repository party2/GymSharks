import React, { useState } from 'react'
import { toast } from "react-toastify"

const BMICalculator = () => {
  const [height, setHeight]= useState("")
  const [weight, setWeight]= useState("")
  const [gender, setGender]= useState("")
  const [BMI, setBMI]= useState("")
  
  const calculateBMI = (event)=>{
    event.preventDefault();

    if(!height || !weight || !gender)
    {
      toast.error("Please enter valid information");
      return;
    }

    const heightInMeters = height/100;
    const BMIValue= (weight / (heightInMeters*heightInMeters)).toFixed(2);
    setBMI(BMIValue);

    if(BMIValue <= 18.5)
    {
      toast.warning ("You are underweight")
    }
    else if(BMIValue >18.5 && BMIValue<=25)
    {
      toast.success(
        "You have healthy a BMI"
      );
    }
    else if(BMIValue > 25 && BMIValue <= 29)
    {
      toast.warning("You are overweight");
    }
    else{
      toast.warning("you are Obese!");
    }
  };
  
  return (
    <section className="bmi">
      <h1>BMI Calculator</h1>

      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label> Height (in cms) </label>
              <input 
                type="number"
                value={height}
                onChange={(event)=>setHeight(event.target.value)}
                required
              />
            </div>
            <div>
              <label> Weight (in Kgs) </label>
              <input 
                type="number"
                value={weight}
                onChange={(event)=>setWeight(event.target.value)}
                required
              />
            </div>
            <div>
              <label> Gender </label>
              <select value={gender} onChange={(event)=>setGender(event.target.value)} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button type='submit' >
              Calculate BMI
            </button>
          </form>
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="" />
        </div>
      </div>
    </section>
    )
}

export default BMICalculator