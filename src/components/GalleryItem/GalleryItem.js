import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import './GalleryItem.css';

const GalleryItem = ({ image, id, title }) => (
    <article className="galleryitem">
        <Link className="galleryitem__wrapper" to={`/asset/${id}`} title={title}>
            <div className="galleryitem__imagewrapper">
                <LazyLoad height={200} once>
                    <img
                        src={image}
                        alt={title}
                        title={title}
                        className="galleryitem__image"
                    />
                </LazyLoad>
            </div>
            {title && <p className="galleryitem__title">{title}</p>}
        </Link>
    </article>
);

GalleryItem.propType = {
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default GalleryItem;