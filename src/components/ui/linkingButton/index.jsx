import {memo} from 'react';
import {Link} from 'react-router-dom';

import styles from './index.module.scss';

const Button = memo(({
                         children,
                         variant = 'primary',
                         size = 'md',
                         to,
                         href,
                         className,
                         onClick,
                         type = 'button',
                         fullWidth = false,
                         ...props
                     }) => {
    const classes = [styles.button, styles[variant], styles[size], fullWidth ? styles.fullWidth : '', className]
        .filter(Boolean)
        .join(' ');

    if (to) {
        return (
            <Link to={to} className={classes} {...props}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={classes} {...props}>
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export default Button;
