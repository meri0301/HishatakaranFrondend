import {memo, useState, useCallback} from 'react';
import {Search} from 'lucide-react';
import {NavLink, useNavigate} from 'react-router-dom';

import Button from '../../ui/linkingButton';
import LanguageDropdown from './languageDropdown.jsx';
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
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');

    const handleSearchSubmit = useCallback((event) => {
        event.preventDefault();
        const query = searchValue.trim();
        const params = new URLSearchParams();
        if (query) {
            params.set('search', query);
        }
        navigate(`${ROUTE_PATHS.library}${params.toString() ? `?${params.toString()}` : ''}`);
    }, [searchValue, navigate]);

    return (
        <header className={styles.navbar}>
            <div className={styles.container}>
                <NavLink to={ROUTE_PATHS.home} className={styles.logo}>
                    <img src={logo} alt="Hishatakaran logo"/>
                </NavLink>

                <nav className={styles.navLinks}>
                    {navItems.map((item) => (
                        <NavLink key={item.to} to={item.to}
                                 className={({isActive}) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <div className={styles.actions}>
                    <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
                        <label htmlFor="navbar-search" className={styles.searchLabel}>
                            Search monuments
                        </label>
                        <Search size={15}/>
                        <input
                            id="navbar-search"
                            type="search"
                            placeholder="Search"
                            value={searchValue}
                            onChange={(event) => setSearchValue(event.target.value)}
                        />
                    </form>
                    <Button to={ROUTE_PATHS.donate} variant="lightSolid" size="sm">
                        Donate
                    </Button>
                    <LanguageDropdown/>
                </div>
            </div>
        </header>
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;

