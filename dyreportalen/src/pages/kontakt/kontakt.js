import React from 'react';
import './kontakt.css';

import map from 'static/images/maps.png';

export const Kontakt = () => (
  <main>
    <div class="bigdiv">

      <div class="container">

        <div class="left-side">

          <h3 class="internat-h3">Du skriver til [internat]</h3>

          <form id="contact-form">
            <div class="name-email-phone">
              <div class="name-input-container">
                <label for="customer_name">Navn*</label>
                <input autocomplete="nope" type="text" id="customer_name" />
              </div>

              <div class="email-input-container">
                <label for="customer_email">E-mail*</label>
                <input autocomplete="nope" type="email" id="customer_email" />
              </div>

              <div class="phone-input-container">
                <label for="customer_phone">Telefon*</label>
                <input autocomplete="nope" type="tel" id="customer_phone" />
              </div>
            </div>

            <div class="message-textarea-container">
              <label for="customer_message">Besked*</label>
              <textarea id="customer_message" cols="80" rows="10"></textarea>
            </div>

            <button id="contact-btn" type="submit">Send</button>

          </form>
        </div>

        <div class="right-side">
          
            <h3>Klik på et internat for at skrive til dem</h3>
                    
            <div class="maps-container">
              <img src={map} alt="Maps" class="maps-container-image" />
            </div>        

        </div>

      </div>

    </div>
  </main>
);
