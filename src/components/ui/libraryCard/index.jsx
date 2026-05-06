import {memo, useMemo} from 'react';
import {MapPin} from 'lucide-react';
import PropTypes from 'prop-types';

import Button from '../linkingButton';
import ProtectedImage from '../protectedImage/index.jsx';
import {buildMonumentDetailPath} from '../../../routes/routePaths.js';
import styles from './index.module.scss';

const slugify = (value = '') =>
    value
        .toString()
        .trim()
        .toLowerCase()
        .replace(/['’]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

const LibraryCard = memo(({imageSrc, title, location, slug}) => {
    const targetSlug = useMemo(() => slug || slugify(title), [slug, title]);
    const targetPath = useMemo(() => buildMonumentDetailPath(targetSlug), [targetSlug]);

    return (
        <div className={styles.card}>
            <ProtectedImage src={imageSrc} alt={title}/>
            <span>{title}</span>
            <p>
                <MapPin size={14}/>
                {location}
            </p>
            <Button variant="primary" size="sm" to={targetPath}>
                View Archive
            </Button>
        </div>
    );
});

LibraryCard.displayName = 'LibraryCard';

LibraryCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string,
    slug: PropTypes.string,
};

export default LibraryCard;


