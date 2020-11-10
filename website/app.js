/* Global Variables */
let URL = "http://api.openweathermap.org/data/2.5/weather?zip="
const apiKey = "6476141f82da5f302a7a464e6bbf9d9f"
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
//EventListner 

//Async GET
const retrieveWeatherData = async (URL, apiKey) =>{ 
    const request = await fetch(URL + apiKey);
    try {
    // Transform into JSON
    const weatherData = await request.json()
    return weatherData;
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  };
  