import React from 'react';
import './css/Header.css';
import { StyleSheet } from '@react-pdf/renderer'
import SubFooter from "./SubFooter.tsx";



const Header: React.FC = () => (
    <div style={styles.FooterContainer}>
        <div style={styles.boxContainers}>
            <p style={styles.boxText}>Beaver Creek Golf Club</p>
            <p style={styles.boxText}>Address</p>
        </div>
        <div style={styles.boxContainers}>
            <p style={styles.boxText}>LOGO</p>
        </div>
        <div style={styles.boxContainers}>
            <p style={styles.boxText}>Weather Forecast</p>
        </div>


        <SubFooter/>
    </div>
);

export default Header;

const styles = StyleSheet.create({
    FooterContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: "black",
        height: '400px',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'inset 0px 10px 30px 15px rgba(250, 250, 250, 0.4)',

    },
    boxContainers: {
        borderWidth: '10px',
        borderColor: 'white',
        borderStyle: 'solid',
        height: '50%',
        width: "20%",
        justifyItems: 'center',
        alignContent: 'center',
    },
    boxText: {
        color: 'white',
    }

});
