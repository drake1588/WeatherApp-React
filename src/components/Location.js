import React from 'react';

const Location = ({ city, commune }) => {
    // Destructuring
    
    // const { city } = props;
    // es lo mismo que 'const city = props.city;'

    return (
        <div>
            <h1>
                {commune}, {city}
            </h1>
        </div>
    );
};

export default Location;