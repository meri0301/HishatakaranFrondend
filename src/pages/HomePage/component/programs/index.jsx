import {memo} from "react";
import {ROUTE_PATHS} from "../../../../routes/routePaths.js";

import Button from "../../../../components/ui/linkingButton/index.jsx";
import programBanner from "../../../../assets/images/programBanner.png";
import SectionHeader from "../../../../components/ui/sectionHeader/index.jsx";

import styles from "../../index.module.scss";

const programs = [
    {
        title: 'De Documentation Et De Preservation Du Patrimoine Armenien',
        date: 'September 2026 12-13',
        description:
            'The Armenian Heritage Documentation and Preservation Programme is a project with a strictly scientific focus.',
    },
    {
        title: 'De Documentation Et De Preservation Du Patrimoine Du Karabakh',
        date: 'September 2026 12-13',
        description:
            'Aimed at collecting and documenting Armenian monumental heritage in peril, implemented by the Hishatakaran Association.',
    },
];

const Programs = () => {

    return (
        <div className={styles.sectionWrap}>
            <SectionHeader title="Programs"/>

            <div className={styles.programBanner}>
                <img src={programBanner} alt="Program banner"/>
            </div>

            <div className={styles.programsList}>
                {programs.map((item) => (
                    <div key={item.title} className={styles.programRow}>
                        <div>
                            <span>{item.title}</span>
                            <p>{item.date}</p>
                        </div>
                        <p>{item.description}</p>
                        <Button variant="primary" size="sm" to={ROUTE_PATHS.programs}>
                            More Info
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default memo(Programs);