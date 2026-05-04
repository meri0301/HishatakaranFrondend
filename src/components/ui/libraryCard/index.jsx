import { memo } from 'react';
import { MapPin } from 'lucide-react';

import Button from '../linkingButton';
import styles from './index.module.scss';

const LibraryCard = memo(({ imageSrc, title, location }) => (
    <div className={styles.card}>
        <img src={imageSrc} alt={title} loading="lazy" />
        <span>{title}</span>
        <p>
            <MapPin size={14} />
            {location}
        </p>
        <Button variant="primary" size="sm">
            View Archive
        </Button>
    </div>
));

LibraryCard.displayName = 'LibraryCard';

export default LibraryCard;
