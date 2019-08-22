import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

export const Footer = memo(() => (
  <footer className="footer">
      <div>
        <strong>Kontakt</strong>
        <a href="tel:+45465547">(+45) 46 22 55 47</a>
        <a href="mailto:dyreportalen@mail.dk">dyreportalen@mail.dk</a>
    </div>
    <div>
        <strong>Internater</strong>
        <Link to="/ekstern-side">Hovedstaden</Link>
        <Link to="/ekstern-side">Østjylland</Link>
        <Link to="/ekstern-side">Nordjylland</Link>
    </div>
    <div>
        <strong>Links</strong>
        <Link to="/kontakt">Kontakt</Link>
        <Link to="/vilkår">Vilkår</Link>
        <Link to="/om-dyrene">Om dyrene</Link>
    </div>
  </footer>
));

Footer.displayName = "Footer";
