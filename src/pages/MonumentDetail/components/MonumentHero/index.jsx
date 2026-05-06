import {memo} from 'react';
import PropTypes from 'prop-types';

import ProtectedImage from '../../../../components/ui/protectedImage/index.jsx';
import styles from './index.module.scss';

const MonumentHero = memo(({title, subtitle, image, eyebrow}) => (
    <div className={styles.wrapper}>
        <section className={styles.hero}>
            <ProtectedImage
                src={image}
                alt={title}
                className={styles.heroImage}
            />
        </section>

        <header className={styles.titleBlock}>
            {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
            <h1 className={styles.title}>{title}</h1>
            {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        </header>
    </div>
));

MonumentHero.displayName = 'MonumentHero';

MonumentHero.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    eyebrow: PropTypes.string,
};

export default MonumentHero;

