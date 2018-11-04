import {
    SET_LOCATION,
    RECEIVE_WEATHER,
    SHOW_ERROR,
} from './actionTypes';

const API_KEY = '8d2de98e089f1c28e1a22fc19a24ef04';
export default (city, country) => {
    return dispatch => {
        //ustawiamy lokacje
        dispatch({ type: SET_LOCATION, city: city, country: country});

        //w tle pobieramy pogode i jak sie uda, to odpalamy reducera z ustawieniem pogody, ew reducer z pokazaniem bledu
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
            .then((data)=>{
                data.json().then((data)=>{
                    if(data.cod === 200){
                        dispatch({ type: RECEIVE_WEATHER, weatherData:data});
                    } else {
                        dispatch({ type: SHOW_ERROR, error: data.message});
                    }
                })
            });
    };
};
