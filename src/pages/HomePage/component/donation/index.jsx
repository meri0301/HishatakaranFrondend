import {memo, useEffect, useRef, useState} from "react";
import {ROUTE_PATHS} from "../../../../routes/routePaths.js";

import Button from "../../../../components/ui/linkingButton/index.jsx";
import donationImage from "../../../../assets/images/donationImage.png";
import SectionHeader from "../../../../components/ui/sectionHeader/index.jsx";

import styles from "../../index.module.scss";

const Donation = () => {
    const donationRef = useRef(null);
    const [donationVisible, setDonationVisible] = useState(false);

    useEffect(() => {
        const el = donationRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setDonationVisible(true);
                    observer.disconnect();
                }
            },
            {threshold: 0.15}
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={styles.sectionWrap}
            ref={donationRef}
        >
            <div className={`${styles.donationCard} ${donationVisible ? styles.donationVisible : ''}`}>
                <div className={styles.donationContent}>
                    <SectionHeader
                        title="Donation"
                        description="You can contribute to the activity of the Hishatakaran NGO by supporting it in both financial and informative ways."
                        light
                    />
                    <Button variant="lightSolid" size="sm" to={ROUTE_PATHS.donate}>
                        More Info
                    </Button>
                </div>
                <img src={donationImage} alt="Historic fresco artwork" className={styles.donationImage}/>
            </div>
        </div>
    )
}

export default memo(Donation);