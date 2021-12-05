import produce from 'immer';
import createReducer from './reducerUtils';



const initialState = {
    weatherForecast: null,
    todaysWeatherForecast:[]
};



const weather = {
    getCurrentWeather(state, action) {
        state.weatherForecast = action.payload;
        state.todaysWeatherForecast=[...state.todaysWeatherForecast,action.payload]
    },
    geTodaysWeathers(state, action) {
        // state.todaysWeatherForecast = action.payload;
    },
}
export default produce((state, action) => createReducer(state, action, weather), initialState);




