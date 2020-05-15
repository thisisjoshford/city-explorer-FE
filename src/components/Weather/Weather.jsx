import React from 'react';
import { useSelector } from 'react-redux';
import { getWeather } from '../../selectors/selectors';
import styles from './WeatherStyles.css';

const Weather = () => {
  const forecast = useSelector(getWeather);

  const forecastCards = forecast.map((day, i) => (
    <div key={i} className={styles.Weather}>
      <h2>{day.time}</h2>
      <img></img>
      <div id="tempHigh"className={styles.Temp}>
        <h3>{Math.round(day.high)}°</h3>
        <p>High</p>
      </div>
      <div id="tempLow"className={styles.Temp}>
        <h3>{Math.round(day.low)}°</h3>
        <p>Low</p>
      </div>
      <h5>💧{Math.round(day.precip * 100)}%</h5>
    </div>
  ));
  return (
    <>
      { forecastCards }
    </>
  );
};

export default Weather;
