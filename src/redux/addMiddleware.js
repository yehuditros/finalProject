import axios from 'axios';
// vvv
export const getFavortiesCities = store => next => action => {
    if (action.type == "GET_FAVORITES_CITIES") {
        axios.get('https://localhost:44383/api/City/GetNumOfFavorites')
            .then((response) => {
                console.log(response);
                action.payload = response.data;
                return next(action);
            })
            .catch(err => { return next(action); });
    }
    else {
        return next(action);
    }
}
// vvv
export const setSelectedCity = store => next => action => {
    if (action.type == "SET_SELECTED_CITY") {
        axios.get(`https://localhost:44383/api/City/AddCityToFavorites?city=${action.payload.city}`)
            .then((response) => {
                console.log(response);
                action.payload.num = response.data;
                return next(action);
            })
            .catch(err => { return next(action); });
    }
    else{
        return next(action);

    }
}
export const getCurrentWeather = store => next => action => {
    if (action.type == "GET_CURRENT_WEATHER") {
        // to do now!!!

        // let weather = store.getState().weather.todaysWeatherForecast.findOne(v => v.city == action.payload && v.date == Date.now().date)
        // if (weather) {
        //     action.payload = weather
        //     return next(action);
        // }
        // else {
        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${action.payload}?apikey=7LMme2bBQoiKGBvSpwQUA7FCuTdQTZTG`)
            .then(res => res.json()).then(data => {
                // fetch('', { "city": action.payload, "date": Date.now().date, "weather": data.DailyForecasts[0] })
                action.payload = data.DailyForecasts[0];
                return next(action);
            }).catch(err => { return next(action); });
        // }
    }
    else {
        return next(action);
    }
}
// ???
export const geTodaysWeathers = store => next => action => {
    if (action.type == "GET_TODAYS_WEATHERS") {
        //get today;
        // fetch('')
        //     .then(res => res.json()).then(data => {
        //         action.payload = data
        //         return next(action);
        //     }).catch(err => { return next(action); });
    }
    else {
        return next(action);
    }
}