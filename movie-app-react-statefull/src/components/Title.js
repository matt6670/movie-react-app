import React from 'react';

const Title = (props) => {
    return(
        <div>
            <img src={props.image} />
            <h1>Title:</h1>
            <p>{props.title}</p>
        </div>
       
    )
}

export default Title;