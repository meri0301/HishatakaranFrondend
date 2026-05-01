import { memo } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

const Button = memo(({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className,
  type = 'button',
  fullWidth = false,
  ...rest
}) => {
  const classes = [styles.button, styles[variant], styles[size], fullWidth ? styles.fullWidth : '', className]
    .filter(Boolean)
    .join(' ');

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
