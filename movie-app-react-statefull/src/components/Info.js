import React from 'react';

const Info = (props) => {
    return(
        <div>
             <h1>Imdb Rating:</h1>
             <p>{props.rating}</p>
             <h1>Realease Year:</h1>
             <p>{props.release_year}</p>
        </div>       
    )
}

export default Info;