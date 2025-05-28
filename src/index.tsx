import NewHeader from "./components/NewHeader.tsx";
import headerImage from './assets/images/homepage-header-image.png';
import {StyleSheet} from "@react-pdf/renderer";

const PRIMARY_COLOR = "#00674F";
const P_FONTSIZE = 15;

function Index() {
    return (
        <div style={{ padding: '20px', position: 'relative' }}>
            <NewHeader />
            <div style={styles.titleContainer}>
                <p style={styles.courseTitle}>Beaver Creek Golf Club</p>
                <p style={styles.courseTitleDescription}>A timeless dance of turf, light, and sky</p>
            </div>
            <div style={{ width: '100%', height: '2000px' }}>
                <img
                    src={headerImage}
                    alt={"scenic picture of golf course"}
                    style={styles.pictureStyle}
                />
            </div>
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
        color: PRIMARY_COLOR,
        fontWeight: "bold",
        margin: 0,
        marginTop: '10px'
    }
});
