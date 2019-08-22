import React, { useEffect, useRef, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import './annoncer.css';

import reklame from 'static/images/reklame.png';

import noUiSlider from 'nouislider';
import { Product } from 'components/product';

export const Annoncer = ({ match }) => {
  const priceSliderRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('http://localhost:63504/api/ad');
      const json = await response.json();
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
            <Link to={`${match.url}/${Math.max(1, currentPage - 1)}`} className="pagi-btn">
              <i className="material-icons">keyboard_arrow_left</i>
            </Link>
            <Link to={`${match.url}/${Math.min(Math.floor(products.length / 3), currentPage + 1)}`} className="pagi-btn">
              <i className="material-icons">keyboard_arrow_right</i>
            </Link>
          </div>
        </div>
        <div>
          <Route />
          {products.map((props, index) => (
              <Product
                key={index}
                {...props}
              />
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
