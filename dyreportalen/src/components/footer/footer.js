import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

export const Footer = () => (
  <footer className="footer">
      <div>
        <strong>Kontakt</strong>
        <a href="#">(+45) 46 22 55 47</a>
        <a href="#">dyreportalen@mail.dk</a>
    </div>
    <div>
        <strong>Internater</strong>
        <a href="#">Hovedstaden</a>
        <a href="#">Østjylland</a>
        <a href="#">Nordjylland</a>
    </div>
    <div>
        <strong>Links</strong>
        <a href="#">Kontakt</a>
        <a href="#">Vilkår</a>
        <a href="#">Om dyrene</a>
    </div>
  </footer>
);
