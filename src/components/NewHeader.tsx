import React from 'react';
import './css/Header.css';


// const PRIMARY_COLOR = "#00674F";
const PRIMARY_COLOR = "#50C878";
const SECONDARY_COLOR = "#000000";
const P_FONTSIZE = 15;
const bookNowButtonPaddingSize = 5;


const Header: React.FC = () => (
    <div style={headerStyles}>
        <p className="navItem" style={navBarText}>Rates</p>
        <p className="navItem" style={navBarText}>Course Details</p>
        <p className="navItem" style={navBarText}>Pass Programs</p>
        <p className="navItem" style={navBarText}>Golf Instruction</p>
        <p className="navItem" style={navBarText}>Event Creation</p>
        <p className="navItem" style={navBarText}>League Information</p>
        <p className="navItem" style={navBarText}>Club House</p>
        <p className="navItem" style={navBarText}>Contact Us</p>
        <div className="classButton" style={bookTimeButtonContainer}>
            <p style={titleText}>Book Now</p>
        </div>
        <p className="navItem" style={{...navBarText, marginLeft: '15px'}}>Login</p>
    </div>
);

export default Header;


const headerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    padding: '5px',
    // backgroundImage: `url('/src/assets/images/homepage-header-image.png')`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    backgroundColor: SECONDARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: '2px',
    borderColor: PRIMARY_COLOR,
    borderStyle: "solid",
    borderRadius: '5px',
    boxShadow: '0px 2px 4px 10px rgba(80, 200, 120, 0.2)', // horizontal, vertical, blur, color
};

const bookTimeButtonContainer: React.CSSProperties = {
    // backgroundColor: PRIMARY_COLOR,
    borderRadius: '20px',
    paddingLeft: bookNowButtonPaddingSize,
    paddingRight: bookNowButtonPaddingSize,
    paddingTop: bookNowButtonPaddingSize/2,
    paddingBottom: bookNowButtonPaddingSize/2,
}

const titleText: React.CSSProperties = {
    // color: SECONDARY_COLOR,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
    fontSize: P_FONTSIZE*1.3,
}

const navBarText: React.CSSProperties = {
    color: PRIMARY_COLOR,
    fontSize: P_FONTSIZE,
    marginRight: '15px',
    fontFamily: "Montserrat, sans-serif",
}



