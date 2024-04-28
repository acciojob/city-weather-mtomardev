
import React, {useState} from "react";
import './../styles/App.css';
import axios from "axios";

const App = () => {
  let [inputValue, setInputValue] = useState("")
  let [weatherData, setWeatherData] = useState();

  function handleInputChange(e){
    setInputValue(e.target.value);
    fetchWeatherData();
  }

  function fetchWeatherData(){
    axios.get("https://api.openweathermap.org/data/2.5/weather",{
      params:{
        appid : "b5e260a568b6a53be41d4349a3e65e42",
        q : inputValue
      }
    })
    .then(responce => {
      console.log(responce.data)
      setWeatherData(responce.data)})
    .catch(error => console.log("Error"))
  }
    
  return (
    <div>
        {/* Do not remove the main div */}
        <input className="search" type="text"
        value={inputValue}
        placeholder="Enter a city" onChange={handleInputChange}/>

        {
          weatherData && (
            <div>
              <h2>{weatherData.name}</h2>
          <p>{weatherData.main.temp}°F</p>
          <p>{weatherData.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].description}
          />
             </div> 
          )
        }


    </div>
  )
}

export default App
