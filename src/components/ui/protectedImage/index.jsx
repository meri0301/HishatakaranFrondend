import {memo, useCallback, useState} from 'react';
import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';

import Popup from '../popup';
import styles from './index.module.scss';

const POPUP_TITLE = 'Protected Heritage Image';
const POPUP_MESSAGE =
    'This image is part of the Artsakh Tangible Heritage archive. To request high-resolution versions or permission for use, please contact the owners.';

const ProtectedImage = memo(({src, alt, className}) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = useCallback((e) => {
        e.preventDefault();
        setIsPopupOpen(true);
    }, []);

    const closePopup = useCallback(() => {
        setIsPopupOpen(false);
    }, []);

    return (
        <div className={`${styles.wrapper} ${className ?? ''}`}>
            {/* Transparent overlay — absorbs pointer interactions */}
            <div
                className={styles.overlay}
                onContextMenu={openPopup}
                onDragStart={openPopup}
                draggable={false}
            />

            <img
                src={src}
                alt={alt}
                draggable={false}
                onContextMenu={openPopup}
                onDragStart={openPopup}
                className={styles.image}
            />

            {isPopupOpen && createPortal(
                <div className={styles.portalOverlay}>
                    <Popup
                        hideSaveButton
                        title={POPUP_TITLE}
                        onCancel={closePopup}
                        cancelButtonText={"Close"}
                        ignoreKeyDownEvent={false}
                    >
                        <div className={styles.popupBody}>
                            <p className={styles.popupMessage}>{POPUP_MESSAGE}</p>
                        </div>
                    </Popup>
                </div>,
                document.body
            )}
        </div>
    );
});

ProtectedImage.displayName = 'ProtectedImage';

ProtectedImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default ProtectedImage;
