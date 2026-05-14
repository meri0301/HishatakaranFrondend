import {memo, useState, useCallback} from 'react';
import useMediaQuery from '../../../hooks/useMediaQuery';
import {Menu, X} from 'lucide-react';
import {NavLink} from 'react-router-dom';

import Actions from './Actions.jsx';
import logo from '../../../assets/images/logo.svg';
import {ROUTE_PATHS} from '../../../routes/routePaths';
import styles from './index.module.scss';

const navItems = [
    {label: 'Cultural Heritages', to: ROUTE_PATHS.culturalHeritages},
    {label: 'Locations', to: ROUTE_PATHS.locations},
    {label: 'Programs', to: ROUTE_PATHS.programs},
    {label: 'Library', to: ROUTE_PATHS.library},
    {label: 'Gallery', to: ROUTE_PATHS.gallery},
    {label: 'Contact Us', to: ROUTE_PATHS.contact},
];

const Navbar = memo(() => {
    const [mobileOpen, setMobileOpen] = useState(false);
    // Hamburger appears at <=1141px (per SCSS)
    const isHamburgerVisible = useMediaQuery('(max-width: 1141px)');

    const handleHamburger = useCallback(() => {
        setMobileOpen((open) => !open);
    }, []);

    const handleNavLinkClick = useCallback(() => {
        setMobileOpen(false);
    }, []);

    return (
        <header className={styles.navbar}>
            <div className={styles.container}>
                <NavLink to={ROUTE_PATHS.home} className={styles.logo} onClick={handleNavLinkClick}>
                    <img src={logo} alt="Hishatakaran logo"/>
                </NavLink>

                <div className={styles.navBarContainer}>

                    <nav className={`${styles.navLinks} ${mobileOpen ? styles.open : ''}`}>
                        {mobileOpen && (
                            <form className={styles.searchForm} role="search" tabIndex={0}>
                                <label htmlFor="navbar-search" className={styles.searchLabel}>Search</label>
                                <input
                                    id="navbar-search"
                                    type="search"
                                    placeholder="Search..."
                                    autoComplete="off"
                                />
                            </form>
                        )}
                        {navItems.map((item) => (
                            <NavLink key={item.to} to={item.to}
                                     className={({isActive}) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                                     onClick={handleNavLinkClick}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                    <Actions
                        onMobileChange={setMobileOpen}
                        handleNavLinkClick={handleNavLinkClick}
                        hideSearch={isHamburgerVisible}
                    />
                    <button
                        className={styles.hamburger}
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileOpen}
                        onClick={handleHamburger}
                    >
                        {mobileOpen ? <X size={28}/> : <Menu size={28}/>}
                    </button>

                </div>


            </div>
        </header>
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;
