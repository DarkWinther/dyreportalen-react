import React, { useEffect, useRef, useState } from 'react';
import './annoncer.css';

import reklame from 'static/images/reklame.png';

import noUiSlider from 'nouislider';

// const testProducts = [{
//   title: 'Stærk engelsk bulldog med flot stamtavle',
//   city: 'Ballerup',
//   text: 'Donec in diam sit amet quam egestas scelerisque. Mauris ornare purus ut augue pharetra vulputate. Maecenas lacus mauris, aliquam vestibulum...',
//   adTypeName: "Salg",
//   category_Name: "Hunde",
//   raceName: "Chihuahua",
//   imageUrl: "https://www.zooplus.dk/magasin/CACHE_IMAGES/768/content/uploads/2017/03/fotolia_131738235.jpg",
//   price: 7499,
// }];

export const Annoncer = () => {
  const priceSliderRef = useRef(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('http://localhost:63504/api/ad');
      const json = await response.json();
      console.log(json);
      setProducts(json);
    };
    
    getProducts();
  }, []);

  useEffect(() => {
    noUiSlider.create(priceSliderRef.current, {
      start: [1300, 2900],
      range: {
          'min': [0],
          'max': [5000]
      },
      tooltips: true,
      connect: true,
      step: 100,
    });
  }, [])

  return (
    <main className="annoncer">
      <div className="limit-search">
        <h3>Begræns Søgning</h3>
        <div>
          <p>Kæledyr type</p>
          <select>
            <option value="Type">Type (alle)</option>
            <option value="hunde">Hunde</option>
            <option value="katte">Katte</option>
          </select>

          <p>Kæledyr race</p>
          <select>
            <option value="Type">Race (alle)</option>
            <option value="engelsk_bulldog">Engelsk bulldog</option>
            <option value="fransk_bulldog">Fransk bulldog</option>
          </select>

          <p>Annonce type</p>
          <select>
            <option value="Type">Type (alle)</option>
            <option value="køb">Køb</option>
            <option value="salg">Salg</option>
          </select>
        </div>
        <p>Pris</p>
        <div ref={priceSliderRef}></div>
        <button >Opdater Søgning</button>
      </div>
      <section className="content">
        <div className="content-header">
          <h4>Vi har <b>{products.length}</b> kæledyr som matcher dine kriterier</h4>
          <div className="pagination">

          </div>
        </div>
        <div>
          {products.map(({
            title,
            city,
            text,
            adTypeName,
            category_Name,
            raceName,
            price,
            imageUrl,
          }, index) => (
            <div className="product" key={index}>
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
              <div>

              </div>
            </div>
          ))}
        </div>
      </section>
      <aside className="ad">
        <a
          href="https://www.naturesmenu.co.uk/natural-dog-food/shop-by-product/natural-dog-treats/country-hunter-superfood-bars"
          rel="noopner noreferrer"
        >
          <img src={reklame} alt="Reklame" />
        </a>
      </aside>
    </main>
  );
};
