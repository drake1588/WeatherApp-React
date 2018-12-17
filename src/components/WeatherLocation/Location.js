import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({ city, commune }) => {
    // Destructuring
    
    // const { city } = props;
    // es lo mismo que 'const city = props.city;'

    return (
        <div className="locationCont">
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