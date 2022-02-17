import React from 'react';

const Person = (props) => {
    return (
        <div>
            <h2>{ props.name }, { props.lastname}</h2>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.color }</p>
        </div>
    )
}

export default Person ;