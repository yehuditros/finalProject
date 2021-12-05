import { createStore, combineReducers, applyMiddleware } from 'redux';
import { getFavortiesCities, getCurrentWeather, setSelectedCity } from './addMiddleware';
import city from './reducers/city';
import weather from './reducers/weather';


const reducer = combineReducers({ city, weather })
const store = createStore(reducer, applyMiddleware(getFavortiesCities, getCurrentWeather, setSelectedCity));
window.store = store;
export default store;
