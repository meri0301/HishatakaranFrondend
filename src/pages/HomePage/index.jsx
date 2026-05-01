import {memo, useRef, useEffect, useState} from 'react';

import Button from '../../components/ui/Button';
import SectionHeader from '../../components/ui/SectionHeader';
import StatsBar from '../../components/ui/StatsBar';
import {ROUTE_PATHS} from '../../routes/routePaths';

import donationImage from '../../assets/images/donationImage.png';
import programBanner from '../../assets/images/programBanner.png';
import headerImage from '../../assets/images/headerImage.png';

import styles from './index.module.scss';
import DocumentationLibrary from "./component/documentationLibrary/index.jsx";
import AboutUs from "./component/aboutUs/index.jsx";

const stats = [
    {end: 5000, suffix: '+', label: 'Monuments Inventoried'},
    {end: 100,  suffix: '+', label: 'Documents'},
    {end: 20,   suffix: '+', label: 'Professional Expeditions'},
    {text: 'ALIPH',          label: 'Funded'},
];

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

const HomePage = () => {
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
            { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);


    return (
        <div className={styles.homePage}>
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

                <StatsBar items={stats}/>
            </div>

            <div className={styles.body}>

                <DocumentationLibrary/>

                <AboutUs/>

                <div className={styles.sectionWrap}>
                    <SectionHeader title="Programs"/>

                    <div className={styles.programBanner}>
                        <img src={programBanner} alt="Program banner"/>
                    </div>

                    <div className={styles.programsList}>
                        {programs.map((item) => (
                            <div key={item.title} className={styles.programRow}>
                                <div>
                                    <h3>{item.title}</h3>
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

            </div>
        </div>
    );
}

export default memo(HomePage);

