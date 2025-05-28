import React from 'react';
import './css/Header.css';


const PRIMARY_COLOR = "#00674F";
// const PRIMARY_COLOR = "#50C878";
const SECONDARY_COLOR = "#000000";
const P_FONTSIZE = 15;
const bookNowButtonPaddingSize = 5;


const Header: React.FC = () => (
    <div style={headerContainer}>
        <p style={courseTitle}>Beaver Creek Golf Club</p>
        <div style={navBarContainer}>
            <div className="navItem" style={navBarButtonContainer}>
                <p style={navBarText}>Rates</p>
            </div>
            <div className="navItem" style={navBarButtonContainer}>
                <p style={navBarText}>Course Details</p>
            </div>
            <div className="navItem" style={navBarButtonContainer}>
                <p style={navBarText}>Pass Programs</p>
            </div>
            <div className="navItem" style={navBarButtonContainer}>
                <p style={navBarText}>Golf Instruction</p>
            </div>
            <div className="navItem" style={navBarButtonContainer}>
                <p style={navBarText}>Even Creation</p>
            </div>
            <div className="navItem" style={navBarButtonContainer}>
                <p style={navBarText}>League Information</p>
            </div>
            <div className="navItem" style={navBarButtonContainer}>
                <p style={navBarText}>Club House</p>
            </div>
            <div className="navItem" style={navBarButtonContainer}>
                <p style={navBarText}>Contact Us</p>
            </div>
            <div className="classButton" style={bookTimeButtonContainer}>
                <p style={titleText}>Book Now</p>
            </div>
            <div className="navItem" style={navBarButtonContainer}>
                <p style={navBarText}>Login</p>
            </div>
        </div>
    </div>
);

export default Header;


const headerContainer: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
}

const navBarContainer: React.CSSProperties = {
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
    borderWidth: '0.1px',
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
    paddingTop: bookNowButtonPaddingSize / 2,
    paddingBottom: bookNowButtonPaddingSize / 2,
    marginLeft: '10px',
}

const titleText: React.CSSProperties = {
    // color: SECONDARY_COLOR,
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
    fontSize: P_FONTSIZE * 1.3,
}

const navBarText: React.CSSProperties = {
    color: PRIMARY_COLOR,
    fontSize: P_FONTSIZE,
    // marginRight: '15px',
    fontFamily: "Montserrat, sans-serif",
}

const navBarButtonContainer: React.CSSProperties = {
    // borderColor: PRIMARY_COLOR,
    // borderWidth: '1px',
    // borderStyle: 'solid',
    paddingTop: '10px',
    paddingBottom: '10px',
    marginLeft: '10px',
}


const courseTitle: React.CSSProperties = {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
    fontSize: P_FONTSIZE*2,
    color: "white",
    marginRight: '200px',
}


