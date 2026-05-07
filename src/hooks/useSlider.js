import { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * useSlider - A generic hook for scrollable sliders with autoplay and pause-on-hover support.
 * @param {Object} options
 * @param {React.RefObject} options.containerRef - Ref to the scrollable container.
 * @param {number} [options.interval=2000] - Autoplay interval in ms.
 * @param {boolean} [options.autoPlayEnabled=true] - Whether autoplay is enabled.
 * @returns {Object} { next, prev, isAtStart, isAtEnd, handleMouseEnter, handleMouseLeave }
 */
function useSlider({ containerRef, interval = 2000, autoPlayEnabled = true }) {
  const intervalRef = useRef(null);
  const isPausedRef = useRef(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Helper to update isAtStart/isAtEnd state
  const updateEdgeState = useCallback(() => {
    const slider = containerRef.current;
    if (!slider) return;
    setIsAtStart(slider.scrollLeft <= 1);
    setIsAtEnd(slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 2);
  }, [containerRef]);

  // Scroll by one card width (with scroll-snap support)
  const scrollByCard = useCallback((direction) => {
    const slider = containerRef.current;
    if (!slider) return;
    const firstCard = slider.firstElementChild;
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 300;
    const scrollStep = cardWidth + 20; // 20px matches row gap
    const atEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 2;
    const atStart = slider.scrollLeft <= 1;
    if (direction > 0 && atEnd) {
      slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (direction < 0 && atStart) {
      slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' });
    } else {
      slider.scrollBy({ left: direction * scrollStep, behavior: 'smooth' });
    }
    setTimeout(updateEdgeState, 350); // allow smooth scroll to finish
  }, [containerRef, updateEdgeState]);

  const next = useCallback(() => scrollByCard(1), [scrollByCard]);
  const prev = useCallback(() => scrollByCard(-1), [scrollByCard]);

  // Autoplay logic
  const startAutoplay = useCallback(() => {
    clearInterval(intervalRef.current);
    if (!autoPlayEnabled) return;
    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        scrollByCard(1);
      }
    }, interval);
  }, [autoPlayEnabled, interval, scrollByCard]);

  // Pause on hover handlers
  const handleMouseEnter = () => { isPausedRef.current = true; };
  const handleMouseLeave = () => { isPausedRef.current = false; };

  // Update edge state on scroll
  useEffect(() => {
    const slider = containerRef.current;
    if (!slider) return;
    updateEdgeState();
    const onScroll = () => updateEdgeState();
    slider.addEventListener('scroll', onScroll);
    return () => slider.removeEventListener('scroll', onScroll);
  }, [containerRef, updateEdgeState]);

  // Start/cleanup autoplay
  useEffect(() => {
    startAutoplay();
    return () => clearInterval(intervalRef.current);
  }, [startAutoplay]);

  return { next, prev, isAtStart, isAtEnd, handleMouseEnter, handleMouseLeave };
}

useSlider.propTypes = {
  containerRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  interval: PropTypes.number,
  autoPlayEnabled: PropTypes.bool,
};

export default useSlider;

