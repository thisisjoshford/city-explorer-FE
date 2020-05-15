import React from 'react';
import { useSelector } from 'react-redux';
import { getWeather } from '../../selectors/selectors';
import styles from './WeatherStyles.css';

const Weather = () => {
  const forecast = useSelector(getWeather);

  const forecastCards = forecast.map((card, i) => (
    <div key={i} className={styles.Weather}>
      <img></img>
      <div className={styles.Temp}>
        <h3>{Math.round(card.high)}°</h3>
        <p>High</p>
      </div>
      <div className={styles.Temp}>
        <h3>{Math.round(card.low)}°</h3>
        <p>Low</p>
      </div>
      <h5>💧{Math.round(card.precipitation * 100)}%</h5>
    </div>
  ));
  return (
    <>
      { forecastCards }
    </>
  );
};

export default Weather;
