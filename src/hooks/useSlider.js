import { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

function useSlider({ containerRef, interval = 2000, autoPlayEnabled = true }) {
  const intervalRef = useRef(null);
  const isPausedRef = useRef(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const updateEdgeState = useCallback(() => {
    const slider = containerRef.current;
    if (!slider || !slider.firstElementChild) return;

    const containerRect = slider.getBoundingClientRect();
    const firstChildRect = slider.firstElementChild.getBoundingClientRect();
    const lastChildRect = slider.lastElementChild.getBoundingClientRect();

    // 1. Check Start: Is the left edge of the first child
    // aligned with or to the right of the container's left edge?
    // We add a 2px buffer for rounding.
    const atStart = firstChildRect.left >= containerRect.left - 2;

    // 2. Check End: Is the right edge of the last child
    // aligned with or to the left of the container's right edge?
    const atEnd = lastChildRect.right <= containerRect.right + 2;

    setIsAtStart(atStart);
    setIsAtEnd(atEnd);
  }, [containerRef]);

  const scrollByCard = useCallback((direction) => {
    const slider = containerRef.current;
    if (!slider || !slider.firstElementChild) return;

    const firstCard = slider.firstElementChild;
    const cardWidth = firstCard.getBoundingClientRect().width;

    // Dynamically get the gap from CSS
    const style = window.getComputedStyle(slider);
    const gap = parseInt(style.gap) || 0;
    const scrollStep = cardWidth + gap;

    // Use the same logic for looping
    const containerRect = slider.getBoundingClientRect();
    const firstRect = firstCard.getBoundingClientRect();
    const lastRect = slider.lastElementChild.getBoundingClientRect();

    const atStart = firstRect.left >= containerRect.left - 2;
    const atEnd = lastRect.right <= containerRect.right + 2;

    if (direction > 0 && atEnd) {
      slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (direction < 0 && atStart) {
      slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' });
    } else {
      slider.scrollBy({ left: direction * scrollStep, behavior: 'smooth' });
    }
  }, [containerRef]);

  const next = useCallback(() => scrollByCard(1), [scrollByCard]);
  const prev = useCallback(() => scrollByCard(-1), [scrollByCard]);

  const startAutoplay = useCallback(() => {
    clearInterval(intervalRef.current);
    if (!autoPlayEnabled) return;
    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) scrollByCard(1);
    }, interval);
  }, [autoPlayEnabled, interval, scrollByCard]);

  const handleMouseEnter = useCallback(() => { isPausedRef.current = true; }, []);
  const handleMouseLeave = useCallback(() => { isPausedRef.current = false; }, []);

  useEffect(() => {
    const slider = containerRef.current;
    if (!slider) return;

    updateEdgeState();
    const onScroll = () => updateEdgeState();

    slider.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateEdgeState);

    return () => {
      slider.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateEdgeState);
    };
  }, [containerRef, updateEdgeState]);

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