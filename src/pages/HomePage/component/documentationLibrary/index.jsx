import {memo, useCallback, useEffect, useRef} from "react";
import SectionHeader from "../../../../components/ui/SectionHeader/index.jsx";
import {ArrowLeft, ArrowRight} from "lucide-react";
import LibraryCard from "../../../../components/ui/LibraryCard/index.jsx";
import styles from "../../index.module.scss";

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
    const intervalRef  = useRef(null);
    const isPausedRef  = useRef(false);

    /** Scroll one card in the given direction, looping at boundaries. */
    const scrollLibrary = useCallback((direction) => {
        const slider = libraryRowRef.current;
        if (!slider) return;

        const firstCard  = slider.firstElementChild;
        const cardWidth  = firstCard ? firstCard.getBoundingClientRect().width : 300;
        const scrollStep = cardWidth + 20; // 20px matches the row gap

        const atEnd   = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 2;
        const atStart = slider.scrollLeft <= 1;

        if (direction > 0 && atEnd) {
            slider.scrollTo({left: 0, behavior: 'smooth'});
        } else if (direction < 0 && atStart) {
            slider.scrollTo({left: slider.scrollWidth, behavior: 'smooth'});
        } else {
            slider.scrollBy({left: direction * scrollStep, behavior: 'smooth'});
        }
    }, []);

    /** Start (or restart) the autoplay interval. */
    const startAutoplay = useCallback(() => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            if (!isPausedRef.current) {
                scrollLibrary(1);
            }
        }, 2000);
    }, [scrollLibrary]);

    /** Manual arrow click: scroll immediately and reset the autoplay timer. */
    const handleLibraryScroll = (direction) => {
        scrollLibrary(direction);
        startAutoplay(); // resets the 2-second countdown after a manual click
    };

    /** Pause autoplay while the mouse is over the slider. */
    const handleMouseEnter = () => { isPausedRef.current = true; };
    const handleMouseLeave = () => { isPausedRef.current = false; };

    /** Boot autoplay on mount, clean up on unmount. */
    useEffect(() => {
        startAutoplay();
        return () => clearInterval(intervalRef.current);
    }, [startAutoplay]);

    return (
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
                <div
                    className={styles.libraryViewport}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
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
                    onClick={() => handleLibraryScroll(1)}
                >
                    <ArrowRight size={20}/>
                </button>
            </div>
        </div>
    )
}

export default memo(DocumentationLibrary);