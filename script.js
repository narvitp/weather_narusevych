const param = {
    "url" : "https://api.openweathermap.org/data/2.5/",
    "appid" : "bfc11862364d13e05b4c7d7ad0c8e2be"
}

    function getWeather(){
        const cityId = document.querySelector('#city-select').value;
        fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => {
			return weather.json();
		}).then(showWeather);
    };
    function showWeather(data) {
        console.log(data);
        document.querySelector('.tempetature').innerHTML = `${Math.round(data.main.temp)}&deg`;
        document.querySelector('.out-img').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
        document.querySelector('.descr').innerHTML = data.weather[0].description;
        document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
    };
    getWeather();
    document.querySelector('.button').onclick = getWeather;
       

    
