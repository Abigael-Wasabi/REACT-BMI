import './index.css';
import './App.css';
import React, { useState } from 'react';
//hook used to create and manage state variables within functional component

function App() {
  //current state value , function to update the state value, function calling
      const [age, setAge]=useState('');
      const [weight, setWeight] =useState('');
      const [height, setHeight] =useState('');
      const [bmi, setBmi] =useState('');
      const [result, setResult] =useState('');

      let calculateBmi=(event)=>{
        event.preventDefault();
        //prevents submitting

        if (weight===0 || weight<0){
          alert("Enter a valid weight figure in kilograms")
        }
        else if (age<0 || age===0){
          alert("Enter a valid age figure")
        }
        else if (height===0 || height<0){
          alert("Enter a valid height figure in meters")
        }
        else{
          let bmi=(weight/(height**2))
          setBmi(bmi.toFixed(1))
        }
        if (bmi<30){
          setResult("UNDERWEIGHT")
        }
        else if (bmi>=30 && bmi<=70){
          setResult("NORMAL WEIGHT")
        }
        else{
          setResult("OVERWEIGHT")
        }
      }

      

let  reload =()=>{
  window.location.reload()
  //built-in object in JS that represents the current URL of the browser window
}
let imgsrc;
imgsrc=require('./Components/69f0a640-70ee-4bae-9103-9c9aaec7e5da_385f1d50.jpg')
//function to import images

return(
  <div className="app">
    <div className="container">
      <h2 className="heading">BMI Application</h2>
      <h5 className="heading">Get to know your Body Mass Index using our App</h5>
      <form onSubmit={calculateBmi}><br></br>
      <div>
        <label style={{textAlign: 'center', display: 'block'}}>Age</label>
        <input value={age} type="number" onChange={(event)=> setAge(event.target.value)}/>
      </div><br></br>

      <div>
        <label style={{textAlign:'center' , display: 'block'}}>Weight(kilograms)</label>
        <input value={weight} type="number" onChange={(event)=> setWeight(event.target.value)}/>
        {/* event handler*/}
      </div><br></br>
      <div>
        <label style={{textAlign:'center' , display: 'block'}}>Height(meters)</label>
        <input value={height} type="number" onChange={(event)=> setHeight(event.target.value)}/>
      </div><br></br>
      <div>
        <button className="btn" type="submit">Calculate</button><br></br>
        <button className="btn btn-outline" type="submit" onClick={reload}>Refresh page</button>
      </div>
      </form>
      <div className="center">
        <h4>Your Body Mass Index is: {bmi}</h4>
        <p><b>{result}</b></p>
      </div>
      <div className="image">
       <img  src={imgsrc} alt="obesity"></img>
      </div>
    </div>
  </div>
)
}

export default App;



