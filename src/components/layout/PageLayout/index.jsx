import { Outlet } from 'react-router-dom';

import Footer from '../Footer';
import Navbar from '../Navbar';
import styles from './index.module.scss';

function PageLayout() {
  return (
    <div className={styles.pageLayout}>
      <Navbar />
      <main className={styles.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default PageLayout;

