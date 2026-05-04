import {memo} from "react";

import partner1 from '../../../assets/images/partner1.png';
import partner2 from '../../../assets/images/partner2.png';
import partner3 from '../../../assets/images/partner3.png';
import partner4 from '../../../assets/images/partner4.png';

import styles from "./index.module.scss";

const Partners = () => {

    return (
        <div className={styles.partnersWrapper}>

            <div className={styles.partnersBackground}>
                <img src={partner1} alt={"inalco CREE"}/>
            </div>
            <div className={styles.partnersBackground}>
                <img src={partner2} alt={"RAA"}/>
            </div>
            <div className={styles.partnersBackground}>
                <img src={partner3} alt={"NAS RA"}/>
            </div>
            <div className={styles.partnersBackground}>
                <img src={partner4} alt={"inalco"}/>
            </div>

        </div>
    )
}

export default memo(Partners);