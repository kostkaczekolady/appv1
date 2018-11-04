import React from 'react';

const Form = (props) => {
    const submitWrapper = (event)=>{
        event.preventDefault();
        props.submit(event.target.elements.city.value, event.target.elements.country.value);
    }

    return (
        <form className="form" onSubmit={submitWrapper}>
            <input type="text" name="city" placeholder="City..."/>
            <input type="text" name="country" placeholder="Country..."/>
            <button>Get Weather</button>
        </form>
    );
};




export default Form;


// import React, { Component } from 'react';
//
//
// const Form = props => (
//     <form className="form" onSubmit={props.getWeather}>
//         <input type="text" name="city" placeholder="City..."/>
//         <input type="text" name="country" placeholder="Country..."/>
//         <button>Get Weather</button>
//     </form>
// );
//
// export default Form;
