import NewHeader from "./components/NewHeader.tsx";
import headerImage from './assets/images/homepage-header-image.png';
import { StyleSheet } from '@react-pdf/renderer'

const PRIMARY_COLOR = "#00674F";
const P_FONTSIZE = 15;

function Index() {

    return (
        <div style={{justifyItems: 'center', padding: '20px'}}>
            <NewHeader/>
            <div style={styles.titleContainer}>
                <p style={styles.courseTitle}>Beaver Creek Golf Club</p>
                <p style={styles.courseTitleDescription}>The only thing a golfer needs is more daylight</p>

            </div>
            <div style={{width: '100%', height: '2000px'}}>
            <img src={headerImage} alt={"scenic picture of golf course"} style={styles.pictureStyle}/>

            </div>

        </div>
    )
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
        position: 'absolute',
        flexShrink: 0,
        marginRight: '30px',
        top: '100px'
    },
    courseTitle: {
        fontFamily: "ICA Rubrik, sans-serif",
        fontWeight: "bold",
        fontSize: P_FONTSIZE * 6,
        color: "transparent",
        WebkitTextStroke: `3px ${PRIMARY_COLOR}`,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: PRIMARY_COLOR,
    },


})
