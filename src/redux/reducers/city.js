import produce from 'immer';
import createReducer from './reducerUtils';



const initialState = {
    favoriteCities: 0,
    selectedCity: ''
};



const city = {
    getFavoritesCities(state, action) {
        if (action.payload)
            state.favoriteCities = action.payload;
    },
    setSelectedCity(state, action) {
        if (action.payload.num) {
            state.favoriteCities = state.favoriteCities + action.payload.num;
        }
        else {
            state.favoriteCities = state.favoriteCities + 1
        }
        state.selectedCity = action.payload.city;
    },
}
export default produce((state, action) => createReducer(state, action, city), initialState);


