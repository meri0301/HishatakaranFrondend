import {useRef} from 'react';
import {ArrowLeft, ArrowRight, Landmark} from 'lucide-react';

import Button from '../../components/ui/Button';
import LibraryCard from '../../components/ui/LibraryCard';
import SectionHeader from '../../components/ui/SectionHeader';
import {ROUTE_PATHS} from '../../routes/routePaths';

import donationImage from '../../assets/images/donationImage.png';
import church1 from '../../assets/images/church1.png';
import church2 from '../../assets/images/church2.png';
import church3 from '../../assets/images/church3.png';
import church4 from '../../assets/images/church4.png';
import programBanner from '../../assets/images/programBanner.png';
import headerImage from '../../assets/images/headerImage.png';

import styles from './index.module.scss';

const stats = [
    {value: '5000+', label: 'Monuments Inventoried'},
    {value: '100+', label: 'Documents'},
    {value: '20+', label: 'Professional Expeditions'},
    {value: 'ALIPH', label: 'Funded'},
];

const libraryItems = [
    {
        key: 1,
        title: 'Hnevank Monastery',
        location: 'Location',
        imageSrc: church1,
    },
    {
        key: 2,
        title: 'Khachkar Relief',
        location: 'Location',
        imageSrc: church2,
    },
    {
        key: 3,
        title: 'Stone Bridge',
        location: 'Location',
        imageSrc: church3,
    },
    {
        key: 4,
        title: 'Church Complex',
        location: 'Location',
        imageSrc: church4,
    },
    {
        key: 5,
        title: 'Stone Bridge',
        location: 'Location',
        imageSrc: church3,
    },
    {
        key: 6,
        title: 'Church Complex',
        location: 'Location',
        imageSrc: church4,
    },
    {
        key: 7,
        title: 'Stone Bridge',
        location: 'Location',
        imageSrc: church3,
    },
    {
        key: 8,
        title: 'Church Complex',
        location: 'Location',
        imageSrc: church4,
    },
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

function HomePage() {
    const libraryRowRef = useRef(null);

    const handleLibraryScroll = (direction) => {
        const slider = libraryRowRef.current;

        if (!slider) {
            return;
        }

        const firstCard = slider.firstElementChild;
        const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : slider.clientWidth * 0.8;
        const gap = 16;

        slider.scrollBy({
            left: direction * (cardWidth + gap),
            behavior: 'smooth',
        });
    };

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

                <div className={styles.statsBar}>
                    {stats.map((item) => (
                        <div key={item.value} className={styles.statItem}>
                            <span className={styles.statsCount}>{item.value}</span>
                            <span className={styles.statsLabel}>{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.body}>

                <div className={styles.sectionWrap}>
                    <SectionHeader title="The Documentation Library"/>
                    <div className={styles.librarySliderWrap}>
                        <button
                            type="button"
                            className={`${styles.iconButton} ${styles.prevButton}`}
                            aria-label="Scroll library left"
                            onClick={() => handleLibraryScroll(-1)}
                        >
                            <ArrowLeft size={20}/>
                        </button>
                        <div className={styles.libraryViewport}>
                            <div className={styles.libraryRow} ref={libraryRowRef}>
                                {libraryItems.map(({key, ...cardProps}) => (
                                    <LibraryCard key={key} {...cardProps} />
                                ))}
                            </div>
                        </div>
                        <button
                            type="button"
                            className={`${styles.iconButton} ${styles.nextButton}`}
                            aria-label="Scroll library right"
                            onClick={() => handleLibraryScroll(1)}
                        >
                            <ArrowRight size={20}/>
                        </button>
                    </div>
                </div>

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
                        <Button to={ROUTE_PATHS.contact} variant="outlineDark" size="sm">
                            See More
                        </Button>
                        <div className={styles.watermark} aria-hidden="true">
                            <Landmark size={220}/>
                            <Landmark size={220}/>
                        </div>
                    </div>
                </div>

                <div className={styles.sectionWrap}>
                    <SectionHeader title="Programs"/>

                    <article className={styles.programBanner}>
                        <img src={programBanner} alt="Program banner"/>
                    </article>

                    <div className={styles.programsList}>
                        {programs.map((item) => (
                            <article key={item.title} className={styles.programRow}>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.date}</p>
                                </div>
                                <p>{item.description}</p>
                                <Button variant="primary" size="sm" to={ROUTE_PATHS.programs}>
                                    More Info
                                </Button>
                            </article>
                        ))}
                    </div>
                </div>

                <div className={styles.sectionWrap}>
                    <article className={styles.donationCard}>
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
                    </article>
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

export default HomePage;

