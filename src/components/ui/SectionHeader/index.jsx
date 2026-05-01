import styles from './index.module.scss';

function SectionHeader({ title, description, eyebrow, align = 'left', light = false }) {
  const classes = [styles.sectionHeader, styles[align], light ? styles.light : ''].filter(Boolean).join(' ');

  return (
    <header className={classes}>
      {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  );
}

export default SectionHeader;

