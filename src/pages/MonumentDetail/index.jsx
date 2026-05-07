import {memo} from 'react';
import {useParams} from 'react-router-dom';
import {ArrowLeft} from 'lucide-react';
import PropTypes from 'prop-types';

import Button from '../../components/ui/linkingButton/index.jsx';
import SectionHeader from '../../components/ui/sectionHeader/index.jsx';

import MonumentHero from './components/MonumentHero/index.jsx';
import TechnicalSheet from './components/TechnicalSheet/index.jsx';
import Bibliography from './components/Bibliography/index.jsx';
import MediaGallery from './components/MediaGallery/index.jsx';

import church1 from '../../assets/images/church1.png';
import church2 from '../../assets/images/church2.png';
import church3 from '../../assets/images/church3.png';
import church4 from '../../assets/images/church4.png';
import dimension1 from '../../assets/images/dimension1.jpg';
import drawing1 from '../../assets/images/drawing1.jpg';

import styles from './index.module.scss';

const mockMonument = {
    title: 'Hnevank Monastery',
    subtitle:
        'A 12th-century cliffside sanctuary perched above the Vorotan gorge — a quiet witness to nine centuries of Armenian devotion.',
    description: [
        `Hnevank Monastery rises from a sheer outcrop above the Vorotan gorge, its ochre stones polished by nine hundred winters of mountain wind. Founded in the early 12th century under the patronage of the Orbelian princes, the complex once anchored a thriving monastic settlement that produced manuscripts, khachkars and liturgical music admired across the Armenian highlands.`,
        `Today three structures remain: the cruciform main church with its slender drum and conical dome, a refectory whose vaulted ceiling still bears traces of indigo pigment, and a square gavit added in the 13th century. The carved tympanum above the western portal — depicting two facing peacocks beneath a cross — is one of the finest surviving examples of high-medieval Artsakh stonework.`,
        `Hishatakaran's documentation team visited the site in the spring of 2024, producing high-resolution photogrammetry of every facade and interior surface. The full archive is being prepared for public release.`,
    ],
    metadata: {
        location: 'Vorotan Gorge, Syunik Province',
        period: '12th century',
        type: 'Monastic Complex',
        status: 'Endangered – seasonal access only',
        photoCredit: 'Gayane Budaghyan',
        documentedOn: 'April 18 — 22, 2024',
    },
    bibliography: [
        `Hasratyan, M. (1992). Architectural Heritage of Artsakh. Yerevan: Academy of Sciences Press.`,
        `Mkrtchyan, S. (2003). "The Cliff Monasteries of the Vorotan Basin." Banber Matenadarani, vol. 17, pp. 84–112.`,
        `Karapetyan, S. (2010). Documentation of Endangered Armenian Monuments, Volume II. RAA Publications.`,
        `Petrosyan, A. & Sargsyan, M. (2024). "Photogrammetric Survey of Hnevank, 2024 Season." Hishatakaran Working Papers, no. 6.`,
    ],
    image: church1,
    photos: [
        {src: church2, alt: 'Eastern facade at first light'},
        {src: church3, alt: 'Refectory interior with vaulted ceiling'},
        {src: church4, alt: 'Detail of the western portal tympanum'},
        {src: church1, alt: 'Khachkar fragment in situ'},
    ],
    dimensionsImages: [
        {src: dimension1, alt: 'Plan of the main church, scale 1:100'},
    ],
    drawings: [
        {src: drawing1, alt: 'Pencil study, western elevation'},
    ],
};

const MonumentDetail = memo(() => {
    const data = mockMonument;

    return (
        <div className={styles.page}>
            <div className={styles.shell}>

                {/* Hero + title */}
                <MonumentHero
                    image={data.image}
                    title={data.title}
                    subtitle={data.subtitle}
                    eyebrow="Monument archive"
                    thumbnails={data.photos.slice(0, 2).map((p) => ({
                        ...p,
                        label: data.title,
                    }))}
                />

                {/* Two-column body */}
                <div className={styles.bodyGrid}>
                    <article className={styles.mainColumn}>
                        <SectionHeader title="Overview"/>
                        {data.description.map((paragraph, index) => (
                            <p key={index} className={styles.paragraph}>
                                {paragraph}
                            </p>
                        ))}

                        <Bibliography entries={data.bibliography}/>
                    </article>

                    <TechnicalSheet metadata={data.metadata}/>
                </div>

                <MediaGallery title="Additional Photos" images={data.photos}/>
                <MediaGallery title="Dimensions & Plans" images={data.dimensionsImages}/>
                <MediaGallery title="Pencil Drawings" images={data.drawings}/>
            </div>
        </div>
    );
});

MonumentDetail.displayName = 'MonumentDetail';

MonumentDetail.propTypes = {
    /**
     * Route params consumed via `useParams`.
     * Documented here for IDE / consumer awareness even though
     * react-router injects them rather than a parent passing them.
     */
    params: PropTypes.shape({
        slug: PropTypes.string,
    }),
};

export default MonumentDetail;

