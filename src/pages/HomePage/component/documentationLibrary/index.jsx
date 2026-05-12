import {memo, useRef, useCallback} from "react";
import SectionHeader from "../../../../components/ui/sectionHeader/index.jsx";
import {ArrowLeft, ArrowRight} from "lucide-react";
import LibraryCard from "../../../../components/ui/libraryCard/index.jsx";
import styles from "../../index.module.scss";

import useSlider from '../../../../hooks/useSlider.js';

import church1 from "../../../../assets/images/church1.png";
import church2 from "../../../../assets/images/church2.png";
import church3 from "../../../../assets/images/church3.png";
import church4 from "../../../../assets/images/church4.png";

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


const DocumentationLibrary = () => {
    const libraryRowRef = useRef(null);
    const {
        next,
        prev,
        isAtStart,
        isAtEnd,
        handleMouseEnter,
        handleMouseLeave
    } = useSlider({
        containerRef: libraryRowRef,
        interval: 2000,
        autoPlayEnabled: true
    });

    // Memoize handlers for buttons and mouse events
    const handlePrev = useCallback(() => prev(), [prev]);
    const handleNext = useCallback(() => next(), [next]);
    const handleEnter = useCallback(() => handleMouseEnter(), [handleMouseEnter]);
    const handleLeave = useCallback(() => handleMouseLeave(), [handleMouseLeave]);

    return (
        <div className={styles.sectionWrap}>
            <SectionHeader title="The Documentation Library"/>
            <div className={styles.librarySliderWrap}>
                <button
                    type="button"
                    className={`${styles.iconButton} ${styles.prevButton}`}
                    aria-label="Scroll library left"
                    onClick={handlePrev}
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                    disabled={isAtStart}
                >
                    <ArrowLeft size={20}/>
                </button>
                <div
                    className={styles.libraryViewport}
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                >
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
                    onClick={handleNext}
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                    disabled={isAtEnd}
                >
                    <ArrowRight size={20}/>
                </button>
            </div>
        </div>
    );
};

DocumentationLibrary.propTypes = {};

export default memo(DocumentationLibrary);