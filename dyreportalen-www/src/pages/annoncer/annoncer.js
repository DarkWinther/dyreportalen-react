import React, { useEffect, useRef } from 'react';
import './annoncer.css';

import reklame from 'static/images/reklame.png';
import testProduct from 'static/images/listing-bulldog.png';

import noUiSlider from 'nouislider';

const products = [{
  title: 'Stærk engelsk bulldog med flot stamtavle',
  city: 'Ballerup',
  country: 'Danmark',
  content: 'Donec in diam sit amet quam egestas scelerisque. Mauris ornare purus ut augue pharetra vulputate. Maecenas lacus mauris, aliquam vestibulum...',
  tags: ['Salg', 'Hunde', 'Engelsk bulldog', 'Ballerup'],
  price: 7499,
}];

export const Annoncer = () => {
  const priceSliderRef = useRef(null);

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
          <h4>Vi har <b>6</b> kæledyr som matcher dine kriterier</h4>
          <div className="pagination">

          </div>
        </div>
        {products.map(({
          title,
          city,
          content,
          country,
          tags,
          price
        }, index) => (
          <div className="product" key={index}>
            <div className="description">
              <img src={testProduct} alt="Test" />
              <div>
                <strong className="title">{title}</strong>
                <p className="location">
                  <i className="material-icons">location_on</i>
                  <span>{`${city}, ${country}`}</span>
                </p>
                <p>{content}</p>
                <p>{tags.map((tag, tagIndex) => {
                  if (tags.length > 1) {
                    if (tagIndex === 0) {
                      return `${tag} |`;
                    }
                    if (tagIndex === tags.length - 1) {
                      return ` ${tag}`;
                    }
                    return ` ${tag} |`;
                  }
                  return tag;
                })}</p>
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
