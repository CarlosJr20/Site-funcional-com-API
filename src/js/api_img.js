const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'amazon-data.p.rapidapi.com',
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
	}
};

fetch('https://amazon-data.p.rapidapi.com/asin.php?asin=B07FZ8S74R&region=us', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));