
// let lat = document.getElementById('latitude').value 
// let lon = document.getElementById('longtitude').value
let key = '6a845a268c91304926a7e808af49f519';
let lang = 'en';

function getTime()
{
  // Set time for each weatehr card
  var d = new Date();
      d.getHours(); // => 9
      d.getMinutes(); // =>  30
      d.getSeconds();

      console.log(`${d.getHours()}:${d.getMinutes()}`)
      
      const timeClass = document.querySelectorAll('.time');

      timeClass.forEach(element => {
          element.textContent = `${d.getHours()}:${d.getMinutes()}`;
      });
}

function convert_wind(wind_speed)
{
    let temp = wind_speed * 3.6
    let result = Math.round((temp + Number.EPSILON) * 100) / 100;
    return result;

}

//pune
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=18.520430&lon=73.856743&appid=${key}`)
	.then(response => response.json())
	.then((response) => {
   
    ob = response;

    console.log(ob);
    
      getTime();
      wind_speed = convert_wind(ob.wind.speed);
      
      document.getElementById("cityName1").innerHTML = ob.name;
      document.getElementById("temp1").innerHTML = `${ob.main.temp} °K`;
      document.getElementById("wind1").innerHTML = `${wind_speed} km/hr`;
      document.getElementById('humidity1').innerHTML = `${ob.main.humidity} %`;
      document.getElementById('description1').innerHTML = ob.weather[0].description;
})

//Hyderabad
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=17.3850&lon=78.4867&appid=${key}`)
	.then(response => response.json())
	.then((response) => {
   
    ob = response;

    console.log(ob);
    
      getTime();
      wind_speed = convert_wind(ob.wind.speed);
        
      document.getElementById("cityName2").innerHTML = ob.name;
      document.getElementById("temp2").innerHTML = `${ob.main.temp} °K`;
      document.getElementById("wind2").innerHTML = `${wind_speed} km/hr`;
      document.getElementById('humidity2').innerHTML = `${ob.main.humidity} %`;
      document.getElementById('description2').innerHTML = ob.weather[0].description;
   
})

//Roorkee
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=29.854263&lon=77.888000&appid=${key}`)
	.then(response => response.json())
	.then((response) => {
   
    ob = response;

    console.log(ob);
    
      getTime();
      wind_speed = convert_wind(ob.wind.speed);
        
      document.getElementById("cityName3").innerHTML = ob.name;
      document.getElementById("temp3").innerHTML = `${ob.main.temp} °K`;
      document.getElementById("wind3").innerHTML = `${wind_speed} km/hr`;
      document.getElementById('humidity3').innerHTML = `${ob.main.humidity} %`;
      document.getElementById('description3').innerHTML = ob.weather[0].description;
   
})
//Mumbai
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=20.388794&lon=78.120407&appid=${key}`)
	.then(response => response.json())
	.then((response) => {
   
    ob = response;

    console.log(ob);
    
      getTime();
      wind_speed = convert_wind(ob.wind.speed);
        
      document.getElementById("cityName4").innerHTML = ob.name;
      document.getElementById("temp4").innerHTML = `${ob.main.temp} °K`;
      document.getElementById("wind4").innerHTML = `${wind_speed} km/hr`;
      document.getElementById('humidity4').innerHTML = `${ob.main.humidity} %`;
      document.getElementById('description4').innerHTML = ob.weather[0].description;
   
})
//Raipur
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=21.250000&lon=81.629997&appid=${key}`)
	.then(response => response.json())
	.then((response) => {
   
    ob = response;

    console.log(ob);
    
      getTime();
      wind_speed = convert_wind(ob.wind.speed);
        
      document.getElementById("cityName5").innerHTML = ob.name;
      document.getElementById("temp5").innerHTML = `${ob.main.temp} °K`;
      document.getElementById("wind5").innerHTML = `${wind_speed} km/hr`;
      document.getElementById('humidity5').innerHTML = `${ob.main.humidity} %`;
      document.getElementById('description5').innerHTML = ob.weather[0].description;
   
})
//Ratnagiri
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=16.994444&lon=73.300003&appid=${key}`)
	.then(response => response.json())
	.then((response) => {
   
    ob = response;

    console.log(ob);
    
      getTime();
      wind_speed = convert_wind(ob.wind.speed);
        
      document.getElementById("cityName6").innerHTML = ob.name;
      document.getElementById("temp6").innerHTML = `${ob.main.temp} °K`;
      document.getElementById("wind6").innerHTML = `${wind_speed} km/hr`;
      document.getElementById('humidity6').innerHTML = `${ob.main.humidity} %`;
      document.getElementById('description6').innerHTML = ob.weather[0].description;
   
})

.catch(err => console.error(err));

