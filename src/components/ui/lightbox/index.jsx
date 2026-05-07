import {useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {KeyBoard} from "../../../core/enums/Keyboard.js";

import useKeyPressedCallback from '../../../hooks/useKeyPressedCallback.js';
import styles from './index.module.scss';

function Lightbox({open, onClose, children}) {
    const isActive = useRef(open);
    isActive.current = open;

    useKeyPressedCallback({
        configs: [
            {
                keyMap: [KeyBoard.esc],
                callback: () => {
                    if (isActive.current) onClose();
                },
            },
        ],
        deps: [open, onClose],
        addingListenerPredicate: () => open,
    });

    useEffect(() => {
        if (!open) return;
        const original = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = original;
        };
    }, [open]);

    if (!open) return null;
    return ReactDOM.createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.content} onClick={e => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose} aria-label="Close">&times;</button>
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
