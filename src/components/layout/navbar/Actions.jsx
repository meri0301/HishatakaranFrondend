import PropTypes from 'prop-types';
import {Search} from 'lucide-react';
import {useNavigate} from "react-router-dom";
import {memo, useCallback, useState} from 'react';

import Button from '../../ui/linkingButton';
import LanguageDropdown from './languageDropdown.jsx';
import {ROUTE_PATHS} from '../../../routes/routePaths';

import styles from './index.module.scss';

const Actions = ({onMobileChange, handleNavLinkClick, hideSearch}) => {

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
        onMobileChange(false);
    }, [searchValue, navigate]);

    return (
        <div className={styles.actions}>
            {!hideSearch && (
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
            )}
            <Button to={ROUTE_PATHS.donate} variant="lightSolid" size="sm" onClick={handleNavLinkClick}>
                Donate
            </Button>
            <LanguageDropdown/>
        </div>
    );
};

Actions.propTypes = {
    onMobileChange: PropTypes.func,
    handleNavLinkClick: PropTypes.func,
    hideSearch: PropTypes.bool,
};

export default memo(Actions);
