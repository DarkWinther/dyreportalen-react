import React, { memo } from 'react';
import PropTypes from 'prop-types';

export const Product = memo(({
  title,
  city,
  text,
  adTypeName,
  category_Name,
  raceName,
  price,
  imageUrl,
}) => (
  <div className="product">
    <div className="description">
      <img src={imageUrl} alt="Test" />
      <div>
        <strong className="title">{title}</strong>
        <p className="location">
          <i className="material-icons">location_on</i>
          <span>{`${city}, Danmark`}</span>
        </p>
        <p>{text}</p>
        <p>{`${adTypeName} | ${category_Name} | ${raceName} | ${city}`}</p>
      </div>
    </div>
    <div className="product-footer">
        <p>{`kr. ${price},-`}</p>
        <i className="material-icons">favorite_border</i>
    </div>
  </div>
));

Product.propTypes = {
  title: PropTypes.string,
  city: PropTypes.string,
  text: PropTypes.string,
  adTypeName: PropTypes.string,
  category_Name: PropTypes.string,
  raceName: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
};

Product.displayName = "Product";
