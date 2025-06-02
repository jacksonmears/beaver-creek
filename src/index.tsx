// src/pages/Index.tsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubFooter from "./components/SubFooter";
import headerImage from "./assets/images/homepage-header-image.png";

// const TERTIARY_COLOR = "#50C878";
const PRIMARY_COLOR = "#00674F";
const P_FONTSIZE = 15;

function Index() {
    return (
        <div style={styles.rootContainer}>
            <div style={{width: '100%', zIndex: -1, position: 'absolute'}}>
                <img
                    src={headerImage}
                    alt={"scenic picture of golf course"}
                    style={styles.pictureStyle}
                />
            </div>


            <Header/>

            <div style={styles.titleContainer}>
                <p style={styles.courseTitle}>Beaver Creek Golf Club</p>
                <p style={styles.courseTitleDescription}>
                    A timeless dance of turf, light, and sky
                </p>
            </div>




            <Footer/>
            <SubFooter/>
        </div>
    );
}

export default Index;

const styles: { [key: string]: React.CSSProperties } = {
    rootContainer: {
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
    },
    titleContainer: {
        marginTop: "40px",
        paddingLeft: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        height: "800px", // adjust if you need more or less spacing
    },
    courseTitle: {
        fontFamily: "ICA Rubrik, sans-serif",
        fontWeight: "bold",
        fontSize: P_FONTSIZE * 6,
        color: "transparent",
        WebkitTextStroke: `3px ${PRIMARY_COLOR}`,
        margin: 0,
    },
    courseTitleDescription: {
        fontFamily: "ICA Rubrik, sans-serif",
        fontSize: P_FONTSIZE * 1.5,
        color: "black",
        fontWeight: "bold",
        margin: 0,
        marginTop: "10px",
    },


};
