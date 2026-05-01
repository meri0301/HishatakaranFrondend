import { memo } from 'react';
import { MapPin } from 'lucide-react';

import Button from '../Button';
import styles from './index.module.scss';

const LibraryCard = memo(({ imageSrc, title, location }) => (
    <article className={styles.card}>
        <img src={imageSrc} alt={title} loading="lazy" />
        <h3>{title}</h3>
        <p>
            <MapPin size={14} />
            {location}
        </p>
        <Button variant="primary" size="sm">
            View Archive
        </Button>
    </article>
));

LibraryCard.displayName = 'LibraryCard';

export default LibraryCard;
