import React from 'react';
import { useSelector } from 'react-redux';
import { getTrails } from '../../selectors/selectors';

const Weather = () => {
  const trails = useSelector(getTrails);

  const trailListings = trails.map((trail, i) => (
    <tr key={i}>
      <td>{trail.length} mi</td>
      <td>{trail.name}</td>
      <td>{trail.location}</td>
      <td>{trail.conditions}</td>
      <td>{trail.condition_date}</td>
      <td><a href={trail.trail_url} target="_blank" rel="noreferrer">LINK</a></td>
    </tr>
  ));
  return (
    <>
      <table>
        <tr>
          <th>Length</th>
          <th>Name</th>
          <th>Location</th>
          <th>Conditions</th>
          <th>Time Stamp</th>
          <th>LINK</th>
        </tr>
        { trailListings }
      </table>
      
    </>
  );
};

export default Weather;
