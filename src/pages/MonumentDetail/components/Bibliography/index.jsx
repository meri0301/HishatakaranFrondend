import {memo} from 'react';
import PropTypes from 'prop-types';

import SectionHeader from '../../../../components/ui/sectionHeader/index.jsx';
import styles from './index.module.scss';

const Bibliography = memo(({title = 'Basic Bibliography', entries}) => {
    if (!entries?.length) return null;

    return (
        <section className={styles.box}>
            <SectionHeader title={title}/>
            <ol className={styles.list}>
                {entries.map((entry, index) => (
                    <li key={index} className={styles.item}>
                        {entry}
                    </li>
                ))}
            </ol>
        </section>
    );
});

Bibliography.displayName = 'Bibliography';

Bibliography.propTypes = {
    title: PropTypes.string,
    entries: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Bibliography;

