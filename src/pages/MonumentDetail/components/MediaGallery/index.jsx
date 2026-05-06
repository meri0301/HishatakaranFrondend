import {memo} from 'react';
import PropTypes from 'prop-types';

import ProtectedImage from '../../../../components/ui/protectedImage/index.jsx';
import SectionHeader from '../../../../components/ui/sectionHeader/index.jsx';
import styles from './index.module.scss';

const MediaGallery = memo(({title, images}) => {
    if (!images?.length) return null;

    return (
        <section className={styles.section}>
            <SectionHeader title={title}/>
            <div className={styles.grid}>
                {images.map((item, index) => (
                    <figure key={`${title}-${index}`} className={styles.item}>
                        <ProtectedImage
                            src={item.src}
                            alt={item.alt}
                            className={styles.image}
                        />
                        <figcaption className={styles.caption}>{item.alt}</figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
});

MediaGallery.displayName = 'MediaGallery';

MediaGallery.propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default MediaGallery;

