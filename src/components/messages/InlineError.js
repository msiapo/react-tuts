import React from 'react';
import PropTypes from 'prop-types';

const InlineError = ({ text }) => <span style={{ color: "#912d2b" }}>{text}</span>;

InlineError.protoTypes = {
    text: PropTypes.string.isRequired
};   
 
export default InlineError;