import React from 'react';
import PropTypes from 'prop-types';
import './Gallery.css';

const Gallery = ({ children }) => {
    const galleryItems = children.map(child => (
       <div className="gallery__item" key={Math.random()}>
           {child}
       </div>
    ));

    return <div className="gallery">{galleryItems}</div>;
};

Gallery.propTypes = {
    children: PropTypes.node
};

export default Gallery;