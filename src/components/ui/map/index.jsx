import {memo} from "react";
import SectionHeader from "../sectionHeader/index.jsx";

import styles from "./index.module.scss";

const Map = () => {

    return (
        <div className={styles.sectionWrap}>
            <SectionHeader title="Heritage Map"/>
            <div className={styles.mapFrame}>
                <iframe
                    title="Heritage map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=44.3%2C39.8%2C48.8%2C41.9&layer=mapnik"
                    loading="lazy"
                />
            </div>
        </div>
    )
}

export default memo(Map);