import React from 'react';
import PropTypes from 'prop-types';
import styles from '/src/styles.css';

// Presentational Components are function based

const Display = ({ color }) => (
<>
<div className={styles.color} style={{backgroundColor: color, height:'150px', width:'150px'}}></div>
</>
);

Display.propTypes = {
color: PropTypes.string.isRequired,
};

export default Display;