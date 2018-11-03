import React, { Component } from 'react';
import App from "../App";

// class Titles extends React.Component{
//     render() {
//         return(
//             <div>
//                 <h1> Weather </h1>
//                 <p>Find temperature!</p>
//             </div>
//         )
//     }
// }

const Titles = () => (
    <div className="titles">
        <h1 className="title-container__title">Weather App</h1>
        <h3 className="title-container__subtitle">Find your city and check weather!</h3>
    </div>
);

export default Titles;
