import { memo, useEffect, useRef, useState } from 'react';

import styles from './index.module.scss';

const useCountUp = ({ end, duration = 1800, enabled }) => {
    const [count, setCount] = useState(0);
    const rafRef = useRef(null);

    useEffect(() => {
        if (!enabled || typeof end !== 'number') return;

        let startTime = null;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed  = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Cubic ease-out: fast start, decelerates toward the end
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));

            if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate);
            }
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [end, duration, enabled]);

    return count;
};

const StatItem = ({ end, text, suffix = '', label, enabled, index }) => {
    const count = useCountUp({ end, duration: 1800, enabled });

    const displayValue = text ?? `${count}${enabled ? suffix : ''}`;

    return (
        <div
            className={`${styles.statItem} ${enabled ? styles.visible : ''}`}
            style={{ '--stagger': index }}
        >
            <span className={styles.count}>{displayValue}</span>
            <span className={styles.label}>{label}</span>
        </div>
    );
};

StatItem.displayName = 'StatItem';

export default memo(StatItem);
