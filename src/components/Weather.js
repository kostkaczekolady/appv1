import React from 'react';
import {connect} from 'react-redux';

class Weather extends React.Component {

    render() {
        let {weatherData, error} = this.props;
        return (
            <div className="weather__info">
                {
                    weatherData && weatherData.name && weatherData.sys.country && <p className="weather__key"> Location:
                        <span className="weather__value"> { weatherData.name }, { weatherData.sys.country }</span>
                    </p>
                }
                {
                    weatherData && weatherData.main.temp && <p className="weather__key"> Temperature [C]:
                        <span className="weather__value"> { weatherData.main.temp }	</span>
                    </p>
                }
                {
                    weatherData && weatherData.main.humidity && <p className="weather__key"> Humidity [%]:
                        <span className="weather__value"> { weatherData.main.humidity } </span>
                    </p>
                }
                {
                    weatherData && weatherData.description && <p className="weather__key"> Conditions:
                        <span className="weather__value"> { weatherData.description } </span>
                    </p>
                }
                {
                    error && <p className="weather__error">{ error }</p>
                }
            </div>
        );
    }
}


const  mapingStateToProps = (state) => {
    return { weatherData: state.weatherData, error: state.error };
};

Weather = connect(mapingStateToProps)(Weather); // Przypisujemy ze component ma pobierac swoje propsy z globalnego state za pomoca funkcji mapingStateToProps (mapowanie state calej aplikacji na konkretne pola)

export default Weather;

