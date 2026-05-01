import SectionHeader from '../../components/ui/SectionHeader';
import styles from './index.module.scss';

function PlaceholderPage({ title }) {
  return (
    <section className={styles.placeholder}>
      <div className={styles.container}>
        <SectionHeader
          title={title}
          description="This page is ready for content. The route is already connected through react-router-dom."
        />
      </div>
    </section>
  );
}

export default PlaceholderPage;

