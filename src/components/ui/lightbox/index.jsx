import {useRef, useEffect, useCallback} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {KeyBoard} from "../../../core/enums/Keyboard.js";
import { useLenis } from 'lenis/react';

import useKeyPressedCallback from '../../../hooks/useKeyPressedCallback.js';
import styles from './index.module.scss';

function Lightbox({open, onClose, children}) {
    const isActive = useRef(open);
    isActive.current = open;
    const lenis = useLenis && useLenis();

    const handleClose = useCallback(() => {
        if (isActive.current) onClose();
    }, [onClose]);

    const handleOverlayClick = useCallback(() => {
        onClose();
    }, [onClose]);

    const handleContentClick = useCallback((e) => {
        e.stopPropagation();
    }, []);

    useKeyPressedCallback({
        configs: [
            {
                keyMap: [KeyBoard.esc],
                callback: handleClose,
            },
        ],
        deps: [open, onClose],
        addingListenerPredicate: () => open,
    });

    useEffect(() => {
        if (!open) {
            if (lenis && typeof lenis.start === 'function') lenis.start();
            return;
        }
        const original = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        if (lenis && typeof lenis.stop === 'function') lenis.stop();
        return () => {
            document.body.style.overflow = original;
            if (lenis && typeof lenis.start === 'function') lenis.start();
        };
    }, [open, lenis]);

    if (!open) return null;
    return ReactDOM.createPortal(
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.content} onClick={handleContentClick}>
                <button className={styles.closeBtn} onClick={handleOverlayClick} aria-label="Close">&times;</button>
                {children}
            </div>
        </div>,
        document.body
    );
}

Lightbox.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Lightbox;
