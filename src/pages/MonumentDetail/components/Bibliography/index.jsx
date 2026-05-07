import {memo} from 'react';
import PropTypes from 'prop-types';

import SectionHeader from '../../../../components/ui/sectionHeader/index.jsx';
import styles from './index.module.scss';

/**
 * Normalises an entry to { label, href } shape so the
 * component can accept either plain strings or
 * `{label, href}` objects from the data layer.
 */
const normalise = (entry) =>
    typeof entry === 'string' ? {label: entry, href: undefined} : entry;

const Bibliography = memo(({title = 'Basic Bibliography', entries}) => {
    if (!entries?.length) return null;

    return (
        <section className={styles.box}>
            <SectionHeader title={title}/>
            <div className={styles.list}>
                {entries.map((raw, index) => {
                    const {label, href} = normalise(raw);
                    const isExternal = Boolean(href);

                    return (
                        <a
                            key={index}
                            href={href || '#'}
                            className={styles.item}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                            onClick={isExternal ? undefined : (e) => e.preventDefault()}
                            aria-disabled={!isExternal}
                        >
                            <span className={styles.index}>{index + 1}.</span>
                            <span className={styles.label}>{label}</span>
                        </a>
                    );
                })}
            </div>
        </section>
    );
});

Bibliography.displayName = 'Bibliography';

Bibliography.propTypes = {
    title: PropTypes.string,
    entries: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                href: PropTypes.string,
            }),
        ]),
    ).isRequired,
};

export default Bibliography;
