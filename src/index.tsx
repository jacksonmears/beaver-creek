// src/pages/Index.tsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubFooter from "./components/SubFooter";
import headerImage from "./assets/images/homepage-header-image.png";

// const TERTIARY_COLOR = "#50C878";
const PRIMARY_COLOR = "#00674F";
const P_FONTSIZE = 15;
const WIDTH_INFO = 500;
const HEIGHT_INFO = 300;

function Index() {
    return (
        <div style={styles.rootContainer}>

            <div style={styles.headerContainer}>
                <Header/>

                <div style={styles.titleContainer}>
                    <p style={styles.courseTitle}>Beaver Creek Golf Club</p>
                    <p style={styles.courseTitleDescription}>A timeless dance of turf, light, and sky</p>
                </div>
            </div>




            <div style={styles.actionContainer}>
                <div style={styles.ratesContainer}>
                        <p style={{color: "white"}}>
                            Enjoy a game of golf on a 27-hole bent grass
                            golf course at Beaver Creek Golf Club. Come
                            and try out your golf swing at our great golf
                            course today! Take a look at our
                            daily rates below
                        </p>
                    <button style={styles.actionButton}>
                            <p style={{color: "white"}}>Button</p>
                        </button>
                </div>
                <div style={styles.passContainer}></div>
                <div style={styles.outingContainer}></div>
            </div>


            {/*<div style={styles.descriptionContainer}>*/}
            {/*    <p>Long Verse</p>*/}
            {/*    <div style={styles.ratesButtonContainer}></div>*/}
            {/*</div>*/}

            <Footer/>
            <SubFooter/>
        </div>
    );
}

export default Index;

const styles: { [key: string]: React.CSSProperties } = {
    rootContainer: {
        minHeight: "100vh",
        backgroundColor: "black",
    },
    headerContainer: {
        backgroundImage: `url(${headerImage})`,
        backgroundPosition: "bottom center",


        padding: 50,
        borderRadius: 100,
        boxShadow: '0px 0px 50px 10px rgba(250, 250, 250, 0.4)',

    },
    titleContainer: {
        marginTop: "40px",
        paddingLeft: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        height: 600,
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
    actionContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 50,
    },
    ratesContainer: {
        width: WIDTH_INFO,
        height: HEIGHT_INFO,
        backgroundColor: "black",
        borderRadius: 30,
        borderColor: "white",
        borderStyle: "solid",
        borderWidth: 1,
        boxShadow: 'inset 0px 0px 50px 30px rgba(250, 250, 250, 0.4)',
        alignItems: "center",
        justifyItems: "center",
    },
    passContainer: {
        width: WIDTH_INFO,
        height: HEIGHT_INFO,
        backgroundColor: "black",
        borderRadius: 30,
        borderColor: "white",
        borderStyle: "solid",
        borderWidth: 1,
        boxShadow: 'inset 0px 0px 50px 30px rgba(250, 250, 250, 0.4)',
        marginLeft: 100,
        marginRight: 100,
    },
    outingContainer: {
        width: WIDTH_INFO,
        height: HEIGHT_INFO,
        backgroundColor: "black",
        borderRadius: 30,
        borderColor: "white",
        borderStyle: "solid",
        borderWidth: 1,
        boxShadow: 'inset 0px 0px 50px 30px rgba(250, 250, 250, 0.4)',
    },
    TextContainer: {
        height: HEIGHT_INFO*0.65,
        width: WIDTH_INFO,
        backgroundColor: "red"
    },
    buttonContainer: {
        height: HEIGHT_INFO*0.35,
    },
    actionButton: {
        padding: 10,
        height: 100,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
    },



};
