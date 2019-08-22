import React, { memo, useEffect, useRef, useState, useCallback } from 'react';
import { Route, Redirect, Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './annoncer.css';

import reklame from 'static/images/reklame.png';

import noUiSlider from 'nouislider';
import { Product } from 'components/product';

const PAGE_SIZE = 3;
const MAX_PAGE_BUTTONS = 4;

export const Annoncer = memo(({ match }) => {
  const priceSliderRef = useRef(null);
  const [products, setProducts] = useState([]);

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

  const getMaxPages = useCallback(() => {
    if (products.length === 0) {
      return 1;
    }
    return Math.ceil(products.length / PAGE_SIZE);
  }, [products.length]);

  const getPageButtons = useCallback(() => {
    let buttons = [];

    for (let i = 1; i <= Math.min(getMaxPages(), MAX_PAGE_BUTTONS); i++) {
      buttons.push(
        <NavLink key={i} to={`${match.url}/${i}`} className="pagi-btn">
          {i}
        </NavLink>
      );
    }

    if (getMaxPages() - MAX_PAGE_BUTTONS > 1) {
      buttons.push(<button key="ellipses" className="pagi-btn">...</button>);
    }

    if (getMaxPages() > MAX_PAGE_BUTTONS) {
      buttons.push(
        <NavLink key={'final'} to={`${match.url}/${getMaxPages()}`} className="pagi-btn">
          {getMaxPages()}
        </NavLink>
      );
    }

    return buttons;
  }, [getMaxPages, match.url]);

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
        <Route exact path={match.path} render={() => <Redirect to={`${match.path}/1`} />} />
        <Route path={`${match.path}/:page`} render={routeProps => {
          const pageProducts = products.slice((routeProps.match.params.page - 1) * PAGE_SIZE, routeProps.match.params.page * PAGE_SIZE);

          return (
            <>
              <div className="content-header">
                <h4>Vi har <b>{products.length}</b> kæledyr som matcher dine kriterier</h4>
                <div className="pagination">
                  <Link to={`${match.url}/${Math.max(1, routeProps.match.params.page - 1 || 1)}`} className="pagi-btn">
                    <i className="material-icons">keyboard_arrow_left</i>
                  </Link>
                  {getPageButtons()}
                  <Link to={`${match.url}/${Math.min(getMaxPages(), routeProps.match.params.page + 1 || 1)}`} className="pagi-btn">
                    <i className="material-icons">keyboard_arrow_right</i>
                  </Link>
                </div>
              </div>
              {pageProducts.map((props, index) => (
                <Product
                  key={index}
                  {...props}
                />
              ))}
            </>
          );
        }} />
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
});

Annoncer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

Annoncer.displayName = "Annoncer";
