import {memo} from "react";
import {ROUTE_PATHS} from "../../../../routes/routePaths.js";

import Button from "../../../../components/ui/linkingButton/index.jsx";
import StatsBar from "../../../../components/ui/statsBar/index.jsx";
import headerImage from "../../../../assets/images/headerImage.png";

import styles from "../../index.module.scss";

const Hero = () => {

    return (
        <div className={styles.heroSection}>
            <div className={styles.overlay}/>
            <img
                src={headerImage}
                alt="Monastery landscape"
                className={styles.heroImage}
            />
            <div className={styles.heroContent}>
                <span>Preserving The Memory Of Artsakh&apos;s Tangible Heritage</span>
                <p>
                    A scientific initiative dedicated to the documentation, registration, and protection of
                    endangered Armenian monuments.
                </p>
                <div className={styles.heroActions}>
                    <Button to={ROUTE_PATHS.locations} variant="primary">
                        Explore The Map
                    </Button>
                    <Button to={ROUTE_PATHS.library} variant="outlineLight">
                        View Documentation
                    </Button>
                </div>
            </div>

            <StatsBar/>
        </div>
    )
}

export default memo(Hero);