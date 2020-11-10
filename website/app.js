/* Global Variables */
let URL = "http://api.openweathermap.org/data/2.5/weather?zip="
const apiKey = "&appid=6476141f82da5f302a7a464e6bbf9d9f"
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//Async GET
const retrieveWeatherData = async (URL, zcode, apiKey) =>{ 
    const request = await fetch(URL + zcode + apiKey);
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

  //EventListner 
document.getElementById('generate').addEventListener('click',performAction());

function performAction(e){
    const zipCode = document.getElementById('zip').value;
    const comment = document.getElementById('feelings').value; 
    if (zipCode == ''){
        alert('Please enter a zip code');
    }
    else {
        retrieveWeatherData (URL, zipCode, apiKey)
        //Add data
        .then(function(data){
            postData('/feedback', {temperature: data.main.temp, date: newDate, UserResponse: comment});
        })
            .then(
                updateUI()
            )    

    }


}

