import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export const Description = ({ children }) => (
    <ReactMarkdown
        className='frDocs-Content__description frDocs-markdown'
        source={children} />
);

Description.propTypes = {
    children: PropTypes.string
};
