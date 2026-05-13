import {ReactLenis} from 'lenis/react'
import PropTypes from "prop-types";

function SmoothScrolling({children}) {

    const lenisOptions = {
        lerp: 0.1,         // Controls how smooth the scrolling is
        duration: 1.5,     // Slows down or speeds up the scrolling
        smoothWheel: true,      // Smooth scroll for desktop (obviously)
    };

    return (
        <ReactLenis root options={lenisOptions}>
            {children}
        </ReactLenis>
    );
}

SmoothScrolling.propTypes = {
    children: PropTypes.node,
};

export default SmoothScrolling;