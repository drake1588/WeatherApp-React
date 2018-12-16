import React from 'react';
import PropTypes from 'prop-types';

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

Location.propTypes = {
    city: PropTypes.string.isRequired,
    commune: PropTypes.string.isRequired,
};

export default Location;