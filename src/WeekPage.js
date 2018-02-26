import React from 'react'
import getForecast from './weatherData.js'

class WeekPage extends React.Component{
render () {
    return (
  <div>
    <h2>Weekly Forecast</h2>
    <ul>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
    <li>Thursday</li>
    <li>Friday</li>
    </ul>
  </div>
        );
    }
};
export default WeekPage;