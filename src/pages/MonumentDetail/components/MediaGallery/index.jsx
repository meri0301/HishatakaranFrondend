import { memo, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import useSlider from '../../../../hooks/useSlider';
import ProtectedImage from '../../../../components/ui/protectedImage/index.jsx';
import SectionHeader from '../../../../components/ui/sectionHeader/index.jsx';
import Lightbox from '../../../../components/ui/lightbox';
import styles from './index.module.scss';

const MediaGallery = memo(({ title, images }) => {
    const trackRef = useRef();
    const { next, prev, isAtStart, isAtEnd } = useSlider({
        containerRef: trackRef,
        interval: 4000,
        autoPlayEnabled: false,
    });
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const openLightbox = useCallback(idx => setLightboxIndex(idx), []);
    const closeLightbox = useCallback(() => setLightboxIndex(null), []);

    if (!images?.length) return null;
    const showNav = images.length > 3; // Hide nav if not enough images to scroll

    return (
        <section className={styles.section}>
            <div className={styles.headerRow}>
                <SectionHeader title={title} />
                {showNav && (
                    <div className={styles.navButtons}>
                        <button
                            className={styles.navButton}
                            onClick={prev}
                            disabled={isAtStart}
                            aria-label="Previous"
                            type="button"
                        >
                            <span aria-hidden="true">{/* Left chevron SVG */}
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5 19L7.5 11L14.5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </button>
                        <button
                            className={styles.navButton}
                            onClick={next}
                            disabled={isAtEnd}
                            aria-label="Next"
                            type="button"
                        >
                            <span aria-hidden="true">{/* Right chevron SVG */}
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 3L14.5 11L7.5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </button>
                    </div>
                )}
            </div>
            <div
                className={styles.track}
                ref={trackRef}
                tabIndex={0}
            >
                {images.map((item, index) => (
                    <figure key={`${title}-${index}`} className={styles.slide}>
                        <ProtectedImage
                            src={item.src}
                            alt={item.alt}
                            className={styles.image}
                            allowZoom
                            onZoom={() => openLightbox(index)}
                        />
                        <figcaption className={styles.caption}>{item.alt}</figcaption>
                    </figure>
                ))}
            </div>
            {lightboxIndex !== null && (
                <Lightbox open={true} onClose={closeLightbox}>
                    <ProtectedImage
                        src={images[lightboxIndex].src}
                        alt={images[lightboxIndex].alt}
                        className={styles.image}
                        allowZoom={false}
                    />
                </Lightbox>
            )}
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
