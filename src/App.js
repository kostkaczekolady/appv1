import React from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import Particles from 'react-particles-js';
import {connect} from 'react-redux';
import setLocationAction from './actions/setLocationAction';

class App extends React.Component {

    render() {
        const {setLocation} = this.props;
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container">
                                    <Titles />
                                </div>
                                <div className="col-xs-7 form-container">
                                    <Form submit={setLocation} />
                                    <Weather />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Particles />
            </div>
        );
    }
};

const mapingActionsToProps = (dispatch) =>{
    return {
        setLocation: (city, country) =>dispatch(setLocationAction(city, country))
    }
};

App = connect(null, mapingActionsToProps)(App); // Przypisujemy ze component ma przypisywac swoje akcje do dispatchowania akcji do reducerów, pierwszy parametr null, bo tam bysmy przypisywali pola a nie funkcje

export default App;

