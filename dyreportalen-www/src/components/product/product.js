import React from 'react';

export const Product = ({
  title,
  city,
  text,
  adTypeName,
  category_Name,
  raceName,
  price,
  imageUrl,
  match,
}) => {
  console.log(match)
  return (
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
  )
};
