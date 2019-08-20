import React, { useState, useRef, useEffect } from 'react';
import './home.css';

import background from 'static/images/nine-dogs-in-grassy-field.jpg';
import hunde from 'static/images/dog.jpg';
import katte from 'static/images/cat.jpg';
import skildpadder from 'static/images/turtle.jpg';
import fugle from 'static/images/yellow-canary-on-flowers.jpg';
import krybdyr from 'static/images/daggekko.jpg';
import gnavere from 'static/images/hamster.jpg';

import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';

export const Home = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [slideBackwards, setSlideBackwards] = useState(false);
  const noUiSliderRef = useRef(null);
  const timeout = useRef(null);

  useEffect(() => {
    showOptions && noUiSlider.create(noUiSliderRef.current, {
      start: [1300, 2900],
      range: {
          'min': [0],
          'max': [5000]
      },
      tooltips: true,
      connect: true,
      step: 100,
    });
  }, [showOptions])

  const optionsHandler = () => {
    clearTimeout(timeout.current);
    if (showOptions) {
      timeout.current = setTimeout(() => setShowOptions(false), 400);
      setSlideBackwards(true);
    } else {
      setSlideBackwards(false);
      setShowOptions(true);
    }
  }

  const optionsMenu = (
    <div className={`dropdown${slideBackwards ? ' backwards' : ''}`}>
      <p>Kæledyr type</p>
      <select>
        <option>Type (alle)</option>
      </select>
      <p>Kæledyr race</p>
      <select>
        <option>Race (alle)</option>
      </select>
      <p>Annonce type</p>
      <select>
        <option>Alle typer</option>
      </select>
      <p>Pris</p>
      <div ref={noUiSliderRef}></div>
      <button>Søg</button>
    </div>
  );

  return (
  <main>
    <div className="frontpage">
      <div className="searchbox">
        <label>
          <i className="material-icons search">search</i>
          <input type="text" />
          <svg onClick={optionsHandler} className="options" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="26.177" height="29.294" viewBox="0 0 26.177 29.294"><defs><clipPath id="a"><rect width="26.177" height="29.294" fill="none"/></clipPath></defs><g clipPath="url(#a)"><line x2="26.177" transform="translate(0 2.181)" fill="none" stroke="#000" strokeWidth="1"/><line x2="26.177" transform="translate(0 14.647)" fill="none" stroke="#000" strokeWidth="1"/><line x2="26.177" transform="translate(0 27.112)" fill="none" stroke="#000" strokeWidth="1"/><g transform="translate(19.01)" fill="#000" stroke="#000" strokeWidth="1"><ellipse cx="2.493" cy="2.181" rx="2.493" ry="2.181" stroke="none"/><ellipse cx="2.493" cy="2.181" rx="1.993" ry="1.681" fill="none"/></g><g transform="translate(2.805 12.465)" fill="#000" stroke="#000" strokeWidth="1"><ellipse cx="2.493" cy="2.181" rx="2.493" ry="2.181" stroke="none"/><ellipse cx="2.493" cy="2.181" rx="1.993" ry="1.681" fill="none"/></g><g transform="translate(10.907 24.931)" fill="#000" stroke="#000" strokeWidth="1"><ellipse cx="2.493" cy="2.181" rx="2.493" ry="2.181" stroke="none"/><ellipse cx="2.493" cy="2.181" rx="1.993" ry="1.681" fill="none"/></g></g></svg>
        </label>
        {showOptions && optionsMenu}
      </div>
      <img className="front-img" src={background} alt="Nine dogs in a grasy field" />
    </div>
    <div className="suggestions">
      <div className="item">
        <h3>Hunde</h3>
        <img src={hunde} alt="Dogs" />
      </div>
      <div className="item">
        <h3>Katte</h3>
        <img src={katte} alt="Cats" />
      </div>
      <div className="item">
        <h3>Skildpadder</h3>
        <img src={skildpadder} alt="Turtles" />
      </div>
      <div className="item">
        <h3>Fugle</h3>
        <img src={fugle} alt="Fugle" />
      </div>
      <div className="item">
        <h3>Krybdyr</h3>
        <img src={krybdyr} alt="Krybdyr" />
      </div>
      <div className="item">
        <h3>Gnavere</h3>
        <img src={gnavere} alt="Gnavere" />
      </div>
    </div>
  </main>
)};
