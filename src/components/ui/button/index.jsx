import {Fragment, memo, useCallback} from 'react';
import PropTypes from 'prop-types';
import './index.module.scss';

const Button = ({
                    hoverText,
                    disabled,
                    onClick,
                    value,
                    propKey,
                    classNames,
                    iconClassNames,
                    title,
                    isLoading,
                    iconPosition,
                    iconName
                }) => {

    const clickHandler = useCallback(() => {
        !disabled && onClick?.(value, propKey);
    }, [disabled, onClick, value, propKey]);

    return (
        <div
            title={hoverText}
            disabled={disabled}
            onClick={clickHandler}
            className={`button ${classNames}`}
        >
            {/*{*/}
            {/*    isLoading ? <div className={"skeleton-item"}/>*/}
            {/*        :*/}
            <Fragment>
                {iconPosition !== 'right' && iconName && <i className={`${iconName} ${iconClassNames}`}/>}
                <span>{title}</span>
                {iconPosition === 'right' && iconName && <i className={`${iconName} ${iconClassNames}`}/>}
            </Fragment>
            {/*}*/}
        </div>
    );
}


Button.propTypes = {
    value: PropTypes.any,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    propKey: PropTypes.string,
    iconName: PropTypes.string,
    hoverText: PropTypes.string,
    classNames: PropTypes.string,
    iconPosition: PropTypes.string,
    iconClassNames: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default memo(Button);
