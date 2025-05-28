import NewHeader from "./components/NewHeader.tsx";
import React from 'react';
import headerImage from './assets/images/homepage-header-image.png';

function Index() {

    return (
        <div style={{justifyItems: 'center', backgroundColor: 'black', padding: '20px'}}>
            <NewHeader />
            <div style={{padding: '20px'}}></div>
            <div style={{width: '100%', height: '2000px'}}>
                <img src={headerImage} alt={"scenic picture of golf course"} style={pictureStyle}/>

            </div>

        </div>
    )
}

export default Index;



const pictureStyle: React.CSSProperties = {
    // width: '100%',
    // height: '400px'
}
