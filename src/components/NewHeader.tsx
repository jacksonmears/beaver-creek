import React from 'react';


const Header: React.FC = () => (
    <div style={headerStyles}>
        <p>testing</p>
    </div>
);

export default Header;



const headerStyles: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '400px',
    backgroundImage: `url('/src/assets/images/homepage-header-image.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

