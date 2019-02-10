import React from 'react';
import './Person.css';

const person = (props) =>{
    return(
        <div className = "Person">
            <p onClick = {props.click}>My Name Is {props.name} I'm {props.age} Years Old</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;
