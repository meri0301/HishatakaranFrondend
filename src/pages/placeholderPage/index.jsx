import { memo } from 'react';

import SectionHeader from '../../components/ui/sectionHeader';
import styles from './index.module.scss';

const PlaceholderPage = memo(({ title }) => (
    <section className={styles.placeholder}>
        <div className={styles.container}>
            <SectionHeader
                title={title}
                description="This page is ready for content. The route is already connected through react-router-dom."
            />
        </div>
    </section>
));

PlaceholderPage.displayName = 'PlaceholderPage';

export default PlaceholderPage;

