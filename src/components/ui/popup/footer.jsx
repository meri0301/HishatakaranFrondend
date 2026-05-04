import {Fragment, memo} from "react";
import PropTypes from "prop-types";

import Button from "../button";
import styles from "./index.module.scss";

const Footer = memo(({
                    onSave,
                    onCancel,
                    hideSaveButton = false,
                    saveButtonText,
                    cancelButtonText,
                    saveButtonDisabled,
                    footerComponent,
                }) => (
        <div className={styles.popupFooter}>
            {footerComponent || (
                <Fragment>
                    <div className={styles.footerButtonWrap}>
                        <Button
                            variant="outlineDark"
                            size="sm"
                            fullWidth
                            onClick={onCancel}
                        >
                            {cancelButtonText || 'Cancel'}
                        </Button>
                    </div>

                    {!hideSaveButton && (
                        <div className={styles.footerButtonWrap}>
                            <Button
                                variant="solid"
                                size="sm"
                                fullWidth
                                disabled={saveButtonDisabled}
                                onClick={onSave}
                            >
                                {saveButtonText || 'Save'}
                            </Button>
                        </div>
                    )}
                </Fragment>
            )}
        </div>
    ));

Footer.displayName = 'PopupFooter';

Footer.propTypes = {
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    saveButtonText: PropTypes.string,
    cancelButtonText: PropTypes.string,
    hideSaveButton: PropTypes.bool,
    saveButtonDisabled: PropTypes.bool,
    footerComponent: PropTypes.element,
};

export default Footer;
