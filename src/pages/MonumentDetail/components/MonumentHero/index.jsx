import {memo} from 'react';
import PropTypes from 'prop-types';

import ProtectedImage from '../../../../components/ui/protectedImage/index.jsx';
import styles from './index.module.scss';

const MonumentHero = memo(({title, subtitle, image, eyebrow, thumbnails = []}) => (
    <section className={styles.wrapper}>
        {/* Large hero image */}
        <div className={styles.heroPanel}>
            <ProtectedImage
                src={image}
                alt={title}
                className={styles.heroImage}
            />
        </div>

        {/* Right column: burgundy title card + thumbnails */}
        <div className={styles.sideColumn}>
            <div className={styles.titleCard}>
                {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
                <h1 className={styles.title}>{title}</h1>
                {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
            </div>

            {thumbnails.length > 0 && (
                <div className={styles.thumbRow}>
                    {thumbnails.slice(0, 2).map((thumb, index) => (
                        <figure key={index} className={styles.thumbCard}>
                            <ProtectedImage
                                src={thumb.src}
                                alt={thumb.alt}
                                className={styles.thumbImage}
                            />
                            <figcaption className={styles.thumbLabel}>
                                {thumb.label || title}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            )}
        </div>
    </section>
));

MonumentHero.displayName = 'MonumentHero';

MonumentHero.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    eyebrow: PropTypes.string,
    thumbnails: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            label: PropTypes.string,
        }),
    ),
};

export default MonumentHero;

