import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import headerImage from './assets/images/homepage-header-image.png';
import {StyleSheet} from "@react-pdf/renderer";
import { fetchWeatherApi } from 'openmeteo';
import {useEffect} from "react";

const TERTIARY_COLOR = "#50C878";
const PRIMARY_COLOR = "#00674F";
const P_FONTSIZE = 15;


const params = {
    "latitude": 41.6448512,
    "longitude": -93.7230336,
    "daily": ["temperature_2m_max", "temperature_2m_min", "precipitation_probability_max", "wind_speed_10m_max", "wind_gusts_10m_max", "cloud_cover_mean","wind_direction_10m_dominant"],
    "current": ["temperature_2m", "precipitation"],
    "timezone": "America/Chicago",
    "wind_speed_unit": "mph",
    "temperature_unit": "fahrenheit",
    "precipitation_unit": "inch"
};
const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params);

const response = responses[0];

const utcOffsetSeconds = response.utcOffsetSeconds();
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const latitude = response.latitude();
const longitude = response.longitude();

// const current = response.current()!;
const daily = response.daily()!;

const weatherData = {
    // current: {
    //     time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
    //     temperature2m: current.variables(0)!.value(),
    //     precipitation: current.variables(1)!.value(),
    // },
    daily: {
        time: [...Array((Number(daily.timeEnd()) - Number(daily.time())) / daily.interval())].map(
            (_, i) => new Date((Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) * 1000)
        ),
        temperature2mMax: daily.variables(0)!.valuesArray()!,
        temperature2mMin: daily.variables(1)!.valuesArray()!,
        precipitationProbabilityMax: daily.variables(2)!.valuesArray()!,
        windSpeed10mMax: daily.variables(3)!.valuesArray()!,
        windGusts10mMax: daily.variables(4)!.valuesArray()!,
        cloudCoverMean: daily.variables(5)!.valuesArray()!,
        windDirection10mDominant: daily.variables(6)!.valuesArray()!,
    },
};





function Index() {

    useEffect(() => {
        console.log(timezone, timezoneAbbreviation, latitude, longitude);
    }, [])


    const windDirectionCalc = (dir: number) => {
        const res: string[] = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
        return res[Math.round(dir / 45) % 8];
    }


    return (
        <div style={{position: 'relative'}}>
            <Header />
            <div style={styles.titleContainer}>
                <p style={styles.courseTitle}>Beaver Creek Golf Club</p>
                <p style={styles.courseTitleDescription}>A timeless dance of turf, light, and sky</p>
            </div>
            <div style={{ width: '100%', height: '1300px'}}>
                <img
                    src={headerImage}
                    alt={"scenic picture of golf course"}
                    style={styles.pictureStyle}
                />
            </div>

            <div style={styles.weatherWeekContainer}>
                {weatherData.daily.time.slice(1).map((date, i) => (
                    <div key={i} style={styles.weatherDayContainer}>
                        <strong>{date.toDateString().slice(0,3)}</strong><br />
                        {Math.floor(weatherData.daily.temperature2mMax[i])}°F<br />
                        {Math.floor(weatherData.daily.temperature2mMin[i])}°F<br />
                        Rain {weatherData.daily.precipitationProbabilityMax[i]}%<br />
                        Wind {Math.floor(weatherData.daily.windSpeed10mMax[i])} mph {windDirectionCalc(weatherData.daily.windDirection10mDominant[i])}<br />
                        {/*Wind Gusts {Math.floor(weatherData.daily.windGusts10mMax[i])} mph <br />*/}
                        {/*Wind Direction */}
                    </div>
                ))}
            </div>


            {/*{weatherData.current.time.toDateString()}*/}
            {/*{weatherData.current.precipitation}*/}
            {/*{weatherData.current.temperature2m}*/}


            <Footer />


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
        color: TERTIARY_COLOR,
        fontWeight: "bold",
        margin: 0,
        marginTop: '10px'
    },
    weatherWeekContainer: {
        display: "flex",
        flexDirection: 'row'
    },
    weatherDayContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: "20px"
    }
});







// Process first location. Add a for-loop for multiple locations or weather models


// Note: The order of weather variables in the URL query and the indices below need to match!


