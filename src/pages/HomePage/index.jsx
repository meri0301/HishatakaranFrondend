import {memo} from 'react';

import Hero from "./component/hero/index.jsx";
import AboutUs from "./component/aboutUs/index.jsx";
import Map from "../../components/ui/map/index.jsx";
import Donation from "./component/donation/index.jsx";
import Programs from "./component/programs/index.jsx";
import DocumentationLibrary from "./component/documentationLibrary/index.jsx";

import styles from './index.module.scss';

const HomePage = () => {

    return (
        <div className={styles.homePage}>
            <Hero/>

            <div className={styles.body}>
                <DocumentationLibrary/>

                <AboutUs/>

                <Programs/>

                <Donation/>

                <Map/>
            </div>

        </div>
    );
}

export default memo(HomePage);

