import {memo, useEffect} from 'react';
import PropTypes from 'prop-types';
import Lenis from 'lenis';

/**
 * Holds the active Lenis instance so other modules
 * (e.g. the popup body-scroll-lock) can pause / resume it.
 */
let lenisInstance = null;

export const getLenis = () => lenisInstance;
export const stopLenis = () => lenisInstance?.stop();
export const startLenis = () => lenisInstance?.start();

/**
 * Smoothly scrolls to a target — element, selector, or absolute Y.
 * Falls back to native scrolling if Lenis isn't ready.
 */
export const smoothScrollTo = (target, options = {}) => {
    if (lenisInstance) {
        lenisInstance.scrollTo(target, {offset: 0, ...options});
        return;
    }

    if (typeof target === 'number') {
        window.scrollTo({top: target, behavior: 'smooth'});
        return;
    }

    const el = typeof target === 'string' ? document.querySelector(target) : target;
    el?.scrollIntoView({behavior: 'smooth', block: 'start'});
};

const SmoothScroll = memo(({children}) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.1,                                   // elegant — fluid but snappy
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exp out
            smoothWheel: true,
            smoothTouch: false,                              // keep native feel on mobile
            wheelMultiplier: 1,
            touchMultiplier: 1.4,
        });

        lenisInstance = lenis;

        let rafId;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        // Intercept in-page anchor link clicks so they use Lenis
        const handleAnchorClick = (event) => {
            const anchor = event.target.closest('a[href^="#"]');
            if (!anchor) return;
            const href = anchor.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            event.preventDefault();
            lenis.scrollTo(target, {offset: 0});
        };
        document.addEventListener('click', handleAnchorClick);

        return () => {
            document.removeEventListener('click', handleAnchorClick);
            cancelAnimationFrame(rafId);
            lenis.destroy();
            lenisInstance = null;
        };
    }, []);

    return children;
});

SmoothScroll.displayName = 'SmoothScroll';

SmoothScroll.propTypes = {
    children: PropTypes.node,
};

export default SmoothScroll;

