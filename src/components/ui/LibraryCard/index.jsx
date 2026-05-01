import { MapPin } from 'lucide-react';

import Button from '../Button';
import styles from './index.module.scss';

function LibraryCard({ imageSrc, title, location }) {
  return (
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
  );
}

export default LibraryCard;

