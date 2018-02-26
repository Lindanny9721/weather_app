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
export default BasicExample