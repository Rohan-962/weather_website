const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a29dc7e4aemshe9b10ad68c76fa4p1a8bf9jsn4051f1ee374f',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

fetch('https://open-weather13.p.rapidapi.com/city/landon', options)
	.then(response => response.json())
	.then((response) => {

        console.log(response)
        
        
    })
    .catch(err => console.error(err));