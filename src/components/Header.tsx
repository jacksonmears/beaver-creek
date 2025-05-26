import React from 'react';

const items = [
    'Course Rates',
    'Course Details',
    'Pass Programs',
    'Golf Instruction',
    'Create Event',
    'League Info',
    'Club House',
    'Contact Info',
];

const SLIDER_WIDTH   = 110;
const SLIDER_HEIGHT  = 50;
const SLIDER_DURATION = 12;

const Header: React.FC = () => (
    <div style={headerStyles}>
        <div style={topHeaderStyles}>
            <div style={leftSideHeaderStyles}>
                <div style={contactInfoContainerStyles}>
                    <h4 style={h4Styles}>Contact Info</h4>
                </div>
            </div>
            <div style={logoStyles}>
                <h1 style={logoH1Styles}>BEAVER CREEK GOLF COURSE</h1>
            </div>
            <div style={rightSideHeaderStyles}>
                <h4 style={h4Styles}>Login</h4>
                <h4 style={h4Styles}>Book Tee Time</h4>
            </div>
        </div>

        <div style={sliderStyles}>
            <div style={listStyles}>
                {items.map((text, i) => (
                    <p key={i} style={itemStyles(i + 1)}>
                        {text}
                    </p>
                ))}
            </div>
        </div>
    </div>
);

export default Header;


/* ─── STYLE OBJECTS ────────────────────────────────────────────────────── */

const headerStyles: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '400px',
    backgroundImage: `url('/src/assets/images/homepage-header-image.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

const topHeaderStyles: React.CSSProperties = {
    display: 'flex',
    margin: '0 10%',
    height: '300px',
    justifyContent: 'space-between',
    marginBottom: '50px',
};

const leftSideHeaderStyles: React.CSSProperties = {
    height: '100%',
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const contactInfoContainerStyles: React.CSSProperties = {
    /* any additional styles you un‑commented before */
};

const logoStyles: React.CSSProperties = {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const logoH1Styles: React.CSSProperties = {
    color: 'white',
    fontFamily: `"Lucida Calligraphy", "Lucida Sans Unicode", "Lucida Grande", sans-serif`,
};

const rightSideHeaderStyles: React.CSSProperties = {
    height: '100%',
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
};

const h4Styles: React.CSSProperties = {
    backgroundColor: 'black',
    borderRadius: '15px',
    padding: '10px',
    color: 'white',
    margin: 0,
};

const sliderStyles = {
    // CSS vars for your slider:
    '--width': `${SLIDER_WIDTH}px`,
    '--height': `${SLIDER_HEIGHT}px`,
    '--quantity': items.length,
    '--duration': `${SLIDER_DURATION}s`,

    backgroundColor: 'black',
    height: `${SLIDER_HEIGHT}px`,
    margin: '0 25%',
    overflow: 'hidden',
    maskImage: 'linear-gradient(to right, transparent, #000 10% 90%, transparent)',
} as React.CSSProperties & Record<string, string | number>;

const listStyles: React.CSSProperties = {
    display: 'flex',
    width: '100%',
    height: '100%',
    position: 'relative',
    minWidth: `calc(${SLIDER_WIDTH}px * ${items.length})`,
    alignItems: 'center',
};

const itemStyles = (position: number) =>
    ({
        width: `${SLIDER_WIDTH}px`,
        textAlign: 'center',
        position: 'absolute',
        left: '100%',
        // these two rely on your global @keyframes autoRun:
        animation: `autoRun ${SLIDER_DURATION}s linear infinite`,
        animationDelay: `calc((${SLIDER_DURATION}s / ${items.length}) * ${position})`,

        backgroundColor: 'green',
        padding: '5px',
        borderRadius: '15px',
        opacity: 0.7,
        transition: 'transform 0.5s ease',

        // still pass in your CSS var for the calc():
        '--position': position,
    } as React.CSSProperties & Record<string, string | number>);
