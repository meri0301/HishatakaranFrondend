import { memo, useEffect, useRef, useState, useCallback } from 'react';

import styles from './index.module.scss';
import StatItem from './statItem.jsx';

const StatsBar = memo(({ items = [] }) => {
    const [hasStarted, setHasStarted] = useState(false);
    const containerRef = useRef(null);

    const handleIntersect = useCallback(([entry], observer) => {
        if (entry.isIntersecting) {
            setHasStarted(true);
            observer.disconnect();
        }
    }, []);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(handleIntersect, {
            threshold: 0.3,
        });

        observer.observe(el);
        return () => observer.disconnect();
    }, [handleIntersect]);

    return (
        <div className={styles.statsBar} ref={containerRef}>
            {items.map((item, i) => (
                <StatItem
                    key={item.label}
                    end={item.end}
                    text={item.text}
                    suffix={item.suffix}
                    label={item.label}
                    enabled={hasStarted}
                    index={i}
                />
            ))}
        </div>
    );
});

StatsBar.displayName = 'StatsBar';

export default StatsBar;
