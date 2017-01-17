var PLATFORMS = {
    xbox: 'xboxone',
    ps4: 'ps4'
}

//list: https://api.gaming7.com/ps4games?country=gb
//game: https://api.gaming7.com/ps4games/2761?country=gb

getJSON('https://api.gaming7.com/ps4games?country=gb').then(function(data) {
	console.log(data);
}, function(status) {
	console.log('Something went wrong.');
});

