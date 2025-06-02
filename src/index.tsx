import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import headerImage from './assets/images/homepage-header-image.png';
import {StyleSheet} from "@react-pdf/renderer";
import SubFooter from "./components/SubFooter.tsx";


const TERTIARY_COLOR = "#50C878";
const PRIMARY_COLOR = "#00674F";
const P_FONTSIZE = 15;








function Index() {



    return (
        <div style={{
            position: 'relative',
            backgroundColor: "black",
            minHeight: '100vh',           // ← ensure it fills the viewport
            zIndex: '-2',

        }}>

            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${headerImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: -1,
            }}/>

            <Header/>
            <div style={styles.titleContainer}>
                <p style={styles.courseTitle}>Beaver Creek Golf Club</p>
                <p style={styles.courseTitleDescription}>A timeless dance of turf, light, and sky</p>
            </div>


            <div style={{width: '100%', height: '1300px', backgroundColor: "black"}}>

            </div>


            <Footer/>
            <SubFooter />


        </div>
    );
}

export default Index;

const styles = StyleSheet.create({
    pictureStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: -1,
    },
    titleContainer: {
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '300px'
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
        color: TERTIARY_COLOR,
        fontWeight: "bold",
        margin: 0,
        marginTop: '10px'
    },

});
