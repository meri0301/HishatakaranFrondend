import {memo} from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

const Card = memo(({title, rows}) => (
    <div className={styles.card}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <dl className={styles.list}>
            {rows.map((row) => (
                <div key={row.label} className={styles.row}>
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                </div>
            ))}
        </dl>
    </div>
));

Card.displayName = 'TechnicalSheetCard';

Card.propTypes = {
    title: PropTypes.string.isRequired,
    rows: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.node.isRequired,
        }),
    ).isRequired,
};

const TechnicalSheet = memo(({metadata}) => {
    const technical = [
        {label: 'Location', value: metadata.location},
        {label: 'Date / Century', value: metadata.period},
        {label: 'Type of Monument', value: metadata.type},
        {label: 'Current Status', value: metadata.status},
    ];

    const credits = [
        {label: 'Photographer', value: metadata.photoCredit},
        {label: 'Date of Documentation', value: metadata.documentedOn},
    ];

    return (
        <aside className={styles.sidebar}>
            <Card title="Technical Sheet" rows={technical}/>
            <Card title="Photo Credits" rows={credits}/>
        </aside>
    );
});

TechnicalSheet.displayName = 'TechnicalSheet';

TechnicalSheet.propTypes = {
    metadata: PropTypes.shape({
        location: PropTypes.string.isRequired,
        period: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        photoCredit: PropTypes.string.isRequired,
        documentedOn: PropTypes.string.isRequired,
    }).isRequired,
};

export default TechnicalSheet;

