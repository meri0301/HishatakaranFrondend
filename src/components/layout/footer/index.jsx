import {memo} from 'react';
import {NavLink} from 'react-router-dom';
import {Facebook, Instagram, Mail} from 'lucide-react';

import logo from '../../../assets/images/logo.svg';
import {ROUTE_PATHS} from '../../../routes/routePaths';

import styles from './index.module.scss';
import Partners from "./partners.jsx";

const links = [
    {label: 'Programs', to: ROUTE_PATHS.programs},
    {label: 'Locations', to: ROUTE_PATHS.locations},
    {label: 'Library', to: ROUTE_PATHS.library},
    {label: 'Gallery', to: ROUTE_PATHS.gallery},
    {label: 'Contact Us', to: ROUTE_PATHS.contact},
    {label: 'Documentation and Registration', to: ROUTE_PATHS.culturalHeritages},
];

const Footer = memo(() => (
    <footer className={styles.footer}>

        <div className={styles.footerWrapper}>
            <Partners/>

            <div className={styles.container}>
                <div className={styles.containerWrapper}>
                    <div className={styles.brand}>
                        <img src={logo} alt="Hishatakaran logo"/>
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
                            <Mail size={14}/>
                            hishatakaran.artsakh@example.com
                        </p>
                        <div className={styles.subscribe}>
                            <input
                                required
                                type="email"
                                placeholder="Email"
                                aria-label="Email"/>
                            <button type="button">Send</button>
                        </div>

                        <div className={styles.socials}>
                            <a href="https://www.facebook.com/profile.php?id=61551728661840"
                               target="_blank"
                               rel="noopener noreferrer" aria-label="Facebook">
                                <Facebook size={18}/>
                            </a>
                            <a href="https://www.instagram.com/hishatakaran_ngo?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank"
                               rel="noopener noreferrer" aria-label="Instagram">
                                <Instagram size={18}/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </footer>
));

Footer.displayName = 'Footer';

export default Footer;
