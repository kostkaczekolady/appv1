import {SET_LOCATION, RECEIVE_WEATHER, SHOW_ERROR} from '../actions/actionTypes';
export default function (state, action) {
    switch(action.type) {
        case SET_LOCATION:
            return {...state, city: action.city, country:action.country, error:null};
        case RECEIVE_WEATHER:
            return {...state, weatherData:action.weatherData, error:null};
        case SHOW_ERROR:
            return {...state, error:action.error, weatherData: null};
        default:
    }
    return state;
};
