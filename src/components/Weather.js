import React from 'react';
// import PropType from 'prop-types';
import {connect} from 'react-redux';

class Weather extends React.Component {
    // opcjonalne
    // static propTypes = {
    //     error: PropType.string,
    //     weatherData: PropType.object,
    // }

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


// import React, { Component } from 'react';
//
// const Weather = props => (
//     <div className="weather__info">
//         {
//             props.city && props.country && <p className="weather__key"> Location:
//                 <span className="weather__value"> { props.city }, { props.country }</span>
//             </p>
//         }
//         {
//             props.temperature && <p className="weather__key"> Temperature [C]:
//                 <span className="weather__value"> { props.temperature }	</span>
//             </p>
//         }
//         {
//             props.humidity && <p className="weather__key"> Humidity [%]:
//                 <span className="weather__value"> { props.humidity } </span>
//             </p>
//         }
//         {
//             props.description && <p className="weather__key"> Conditions:
//                 <span className="weather__value"> { props.description } </span>
//             </p>
//         }
//         {
//             props.error && <p className="weather__error">{ props.error }</p>
//         }
//     </div>
// );
//
// export default Weather;
