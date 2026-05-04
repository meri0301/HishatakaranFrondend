import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

import styles from './index.module.scss';

const Dropdown = memo(({
    items = [],
    value,
    onChange,
    triggerLabel,
    placeholder = 'Select',
    disabled = false,
    icon,
    className,
    variant = 'default',
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    const toggle = useCallback((e) => {
        e.stopPropagation();
        if (!disabled) setIsOpen((prev) => !prev);
    }, [disabled]);

    const select = useCallback((val, e) => {
        e.stopPropagation();
        onChange?.(val);
        setIsOpen(false);
    }, [onChange]);

    useEffect(() => {
        if (!isOpen) return;

        const handleOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleOutside);
        return () => document.removeEventListener('click', handleOutside);
    }, [isOpen]);

    const activeItem  = items.find((i) => i.value === value);
    const displayText = triggerLabel ?? activeItem?.label ?? placeholder;

    const isNavbar = variant === 'navbar';

    const wrapperClass = [
        styles.wrapper,
        isNavbar ? styles.navbarWrapper : styles.defaultWrapper,
        disabled ? styles.disabled : '',
        className,
    ].filter(Boolean).join(' ');

    const triggerClass = [
        styles.trigger,
        isNavbar ? styles.navbarTrigger : styles.defaultTrigger,
        isOpen ? styles.open : '',
    ].filter(Boolean).join(' ');

    const menuClass = isNavbar ? `${styles.menu} ${styles.navbarMenu}` : `${styles.menu} ${styles.defaultMenu}`;
    const optionClass = (val) => [
        styles.option,
        isNavbar ? styles.navbarOption : styles.defaultOption,
        val === value ? (isNavbar ? styles.navbarSelected : styles.defaultSelected) : '',
    ].filter(Boolean).join(' ');

    return (
        <div className={wrapperClass} ref={wrapperRef}>
            <button
                type="button"
                className={triggerClass}
                onClick={toggle}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                disabled={disabled}
            >
                {icon && <span className={styles.icon}>{icon}</span>}
                <span className={styles.value}>{displayText}</span>
                <ChevronDown size={14} className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} />
            </button>

            {isOpen && (
                <ul className={menuClass} role="listbox">
                    {items.map(({ value: val, label }) => (
                        <li
                            key={val}
                            role="option"
                            aria-selected={val === value}
                            className={optionClass(val)}
                            onClick={(e) => select(val, e)}
                        >
                            {label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
});

Dropdown.displayName = 'Dropdown';

export default Dropdown;

