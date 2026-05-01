import { Facebook, Instagram, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import logo from '../../../assets/images/logo.svg';
import { ROUTE_PATHS } from '../../../routes/routePaths';
import styles from './index.module.scss';

const links = [
  { label: 'Programs', to: ROUTE_PATHS.programs },
  { label: 'Locations', to: ROUTE_PATHS.locations },
  { label: 'Library', to: ROUTE_PATHS.library },
  { label: 'Gallery', to: ROUTE_PATHS.gallery },
  { label: 'Partners', to: ROUTE_PATHS.contact },
  { label: 'Documentation and Registration', to: ROUTE_PATHS.culturalHeritages },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img src={logo} alt="Hishatakaran logo" />
        </div>

        <div className={styles.linkGrid}>
          {links.map((item) => (
            <NavLink key={item.label} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className={styles.contact}>
          <p>
            <Mail size={14} />
            hishatakaran.artsakh@example.com
          </p>
          <div className={styles.subscribe}>
            <input type="email" placeholder="Email" aria-label="Email" />
            <button type="button">Send</button>
          </div>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

