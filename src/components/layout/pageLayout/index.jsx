import { memo } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../footer';
import Navbar from '../navbar';
import styles from './index.module.scss';

const PageLayout = memo(() => (
    <div className={styles.pageLayout}>
        <Navbar />
        <main className={styles.content}>
            <Outlet />
        </main>
        <Footer />
    </div>
));

PageLayout.displayName = 'PageLayout';

export default PageLayout;

