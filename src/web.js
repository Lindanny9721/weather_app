import React from 'react'
import DayPage from './DayPage'
import WeekPage from "./WeekPage"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Five Day Forecast</Link></li>
        <li><Link to="/today">Hourly Forecast</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={WeekPage}/>
      <Route path="/today" component={DayPage}/>
    </div>
  </Router>
)

const weekPage = () => (
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
)

const dayPage = () => (
  <div>
    <h2>Hourly</h2>
    <ul>
    <li> It's cloudy right now! </li>
    </ul>
  </div>
)



export default BasicExample