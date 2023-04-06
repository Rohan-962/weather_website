const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a29dc7e4aemshe9b10ad68c76fa4p1a8bf9jsn4051f1ee374f',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Delhi', options)
	.then(response => response.json())
	.then((response) => {

        console.log(response)
		
		CO_concentration.innerHTML =  response.CO.concentration
		CO_aqi.innerHTML = response.CO.aqi
		NO2_concentration.innerHTML = response.NO2.concentration
		NO2_aqi.innerHTML = response.NO2.aqi
		O3_concentration.innerHTML =  response.O3.concentration
		O3_aqi.innerHTML =  response.O3.aqi
		SO2_concentration.innerHTML =  response.SO2.concentration
		SO2_aqi.innerHTML =  response.SO2.aqi
		PM25_concentration.innerHTML =   response.PM25.concentration
		PM25_aqi.innerHTML =   response.PM25.aqi
		PM10_concentration.innerHTML =  response.PM10.concentration
		PM10_aqi.innerHTML =  response.PM10.aqi
		overall_aqi.innerHTML =   response.overall_aqi
})
    
.catch(err => console.error(err));
    