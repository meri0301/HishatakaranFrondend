import {memo, useEffect, useRef, useCallback} from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";
import {KeyBoard} from "../../../core/enums/Keyboard.js";
import useKeyPressedCallback from "../../../hooks/useKeyPressedCallback.js";
// import {startLenis, stopLenis} from "../../layout/smoothScroll/index.jsx";
import styles from "./index.module.scss";

const Content = memo(({
                          top,
                          title,
                          onSave,
                          children,
                          onCancel,
                          disabled,
                          hideHeader,
                          hideFooter,
                          hideSaveButton,
                          saveButtonText,
                          isWarningPopup,
                          footerComponent,
                          saveButtonColor,
                          cancelButtonText,
                          ignoreKeyDownEvent = false,
                      }) => {
    const wrapperRef = useRef();

    // useEffect(() => {
    //     const previous = document.body.style.overflow;
    //     document.body.style.overflow = 'hidden';
    //     stopLenis();
    //     return () => {
    //         document.body.style.overflow = previous;
    //         startLenis();
    //     };
    // }, []);

    const handleCancel = useCallback(() => {
        onCancel?.();
        return -1;
    }, [onCancel]);

    const handleSave = useCallback(() => {
        onSave?.();
        return -1;
    }, [onSave]);

    useKeyPressedCallback({
        configs: [
            {
                keyMap: [KeyBoard.esc], callback: handleCancel
            },
            {
                keyMap: [KeyBoard.enter], callback: handleSave
            },
        ],
        addingListenerPredicate: () => !ignoreKeyDownEvent,
        deps: [onCancel, onSave, ignoreKeyDownEvent]
    });

    const wrapperClass = [
        isWarningPopup ? styles.warningPopupWrapper : styles.popupWrapper,
        top ? styles.top : '',
    ].filter(Boolean).join(' ');

    return (
        <div className={wrapperClass} ref={wrapperRef}>
            <div className={styles.popupContainer}>
                {!hideHeader ? <Header title={title}/> : null}
                {children}
                {
                    !hideFooter
                        ? <Footer
                            onSave={handleSave}
                            onCancel={handleCancel}
                            saveButtonDisabled={disabled}
                            saveButtonText={saveButtonText}
                            hideSaveButton={hideSaveButton}
                            saveButtonColor={saveButtonColor}
                            footerComponent={footerComponent}
                            cancelButtonText={cancelButtonText}
                        />
                        : null
                }
            </div>
        </div>
    );
});

Content.displayName = 'PopupContent';

Content.propTypes = {
    top: PropTypes.bool,
    onSave: PropTypes.func,
    title: PropTypes.string,
    onCancel: PropTypes.func,
    disabled: PropTypes.bool,
    hideFooter: PropTypes.bool,
    hideHeader: PropTypes.bool,
    children: PropTypes.node,
    hideSaveButton: PropTypes.bool,
    isWarningPopup: PropTypes.bool,
    saveButtonText: PropTypes.string,
    saveButtonColor: PropTypes.string,
    ignoreKeyDownEvent: PropTypes.bool,
    cancelButtonText: PropTypes.string,
    footerComponent: PropTypes.element,
};

export default Content;
