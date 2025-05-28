import React from 'react';
import './css/Header.css';
import { StyleSheet } from '@react-pdf/renderer'

const TERTIARY_COLOR = "#50C878";
const PRIMARY_COLOR = "#00674F";
const SECONDARY_COLOR = "#000000";
const P_FONTSIZE = 15;
const bookNowButtonPaddingSize = 5;

const Header: React.FC = () => (
    <div style={styles.headerContainer}>



        <div className="box" style={styles.navBarContainer}>
            <div className="navItem" style={styles.navBarButtonContainer}><p style={styles.navBarText}>Rates</p></div>
            <div className="navItem" style={styles.navBarButtonContainer}><p style={styles.navBarText}>Course
                Details</p></div>
            <div className="navItem" style={styles.navBarButtonContainer}><p style={styles.navBarText}>Pass Programs</p>
            </div>
            <div className="navItem" style={styles.navBarButtonContainer}><p style={styles.navBarText}>Golf
                Instruction</p></div>
            <div className="navItem" style={styles.navBarButtonContainer}><p style={styles.navBarText}>Event
                Creation</p></div>
            <div className="navItem" style={styles.navBarButtonContainer}><p style={styles.navBarText}>League
                Information</p></div>
            <div className="navItem" style={styles.navBarButtonContainer}><p style={styles.navBarText}>Club House</p>
            </div>
            <div className="navItem" style={styles.navBarButtonContainer}><p style={styles.navBarText}>Contact Us</p>
            </div>
            <div className="classButton" style={styles.bookTimeButtonContainer}><p style={styles.titleText}>Book Now</p>
            </div>
            <div className="navItem" style={styles.navBarButtonContainer}><p style={styles.navBarText}>Login</p></div>
        </div>
    </div>
);

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    navBarContainer: {
        marginLeft: '1200px',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        padding: '5px',
        backgroundColor: SECONDARY_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: '0.1px',
        borderColor: PRIMARY_COLOR,
        borderStyle: "solid",
        borderRadius: '5px',
        boxShadow: '0px 2px 4px 10px rgba(80, 200, 120, 0.2)',
    },
    bookTimeButtonContainer: {
        borderRadius: '20px',
        paddingLeft: bookNowButtonPaddingSize,
        paddingRight: bookNowButtonPaddingSize,
        paddingTop: bookNowButtonPaddingSize / 2,
        paddingBottom: bookNowButtonPaddingSize / 2,
        marginLeft: '15px',
    },
    titleText: {
        fontFamily: "Cursive, sans-serif",
        fontWeight: "bold",
        fontSize: P_FONTSIZE * 1.3,
    },
    navBarText: {
        color: TERTIARY_COLOR,
        fontSize: P_FONTSIZE,
        fontFamily: "Garamond, sans-serif",
        fontWeight: "bold",
    },
    navBarButtonContainer: {
        paddingTop: '10px',
        paddingBottom: '10px',
        marginLeft: '15px',
    },

});
