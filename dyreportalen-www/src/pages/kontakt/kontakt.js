import React from 'react';
import './kontakt.css';

import map from 'static/images/maps.png';

export const Kontakt = () => (
  <main>
    <div className="bigdiv">

      <div className="container">

        <div className="left-side">

          <h3 className="internat-h3">Du skriver til [internat]</h3>

          <form id="contact-form">
            <div className="name-email-phone">
              <div className="name-input-container">
                <label for="customer_name">Navn*</label>
                <input autocomplete="nope" type="text" id="customer_name" />
              </div>

              <div className="email-input-container">
                <label for="customer_email">E-mail*</label>
                <input autocomplete="nope" type="email" id="customer_email" />
              </div>

              <div className="phone-input-container">
                <label for="customer_phone">Telefon*</label>
                <input autocomplete="nope" type="tel" id="customer_phone" />
              </div>
            </div>

            <div className="message-textarea-container">
              <label for="customer_message">Besked*</label>
              <textarea id="customer_message" cols="80" rows="10"></textarea>
            </div>

            <button id="contact-btn" type="submit">Send</button>

          </form>
        </div>

        <div className="right-side">
          
            <h3>Klik på et internat for at skrive til dem</h3>
                    
            <div className="maps-container">
              <img src={map} alt="Maps" className="maps-container-image" />
            </div>        

        </div>

      </div>

    </div>
  </main>
);
