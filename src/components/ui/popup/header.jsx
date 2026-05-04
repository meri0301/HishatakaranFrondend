import { memo } from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

const Header = memo(({ title }) => (
    <div className={styles.popupHeader}>
        <h2 className={styles.popupHeaderTitle}>
            {title}
        </h2>
    </div>
));

Header.displayName = 'PopupHeader';

Header.propTypes = {
    title: PropTypes.string,
};

export default Header;