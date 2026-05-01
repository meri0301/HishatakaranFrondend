import {memo} from "react";
import SectionHeader from "../../../../components/ui/SectionHeader/index.jsx";
import Button from "../../../../components/ui/Button/index.jsx";
import {ROUTE_PATHS} from "../../../../routes/routePaths.js";
import {Landmark} from "lucide-react";
import styles from "../../index.module.scss";

import logoBird from "../../../../assets/images/logoBirds.svg";

const AboutUsPage = () => {


    return (
        <div className={styles.sectionWrap}>
            <div className={styles.aboutCard}>
                <SectionHeader title="About Us"/>
                <p>
                    The academic project of documenting Artsakh&apos;s tangible cultural heritage started in
                    June
                    2023 in order to study and document endangered historical and cultural monuments of the
                    Artsakh Republic. The project aims to preserve records of monuments at risk and make
                    documented material available for future generations.
                </p>
                <Button to={ROUTE_PATHS.contact} variant="outlineDark" size="sm" className={styles.seeMoreBtn}>
                    See More
                </Button>
                <div className={styles.watermark} aria-hidden="true">
                    <img src={logoBird} alt="logoBirds" className={styles.aboutCardBackground}/>
                </div>
            </div>
        </div>
    )
}
export default memo(AboutUsPage);