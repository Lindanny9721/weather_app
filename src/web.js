import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Weekly Forecast</Link></li>
        <li><Link to="/day">Day</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Weekly}/>
      <Route path="/day" component={Daily}/>
    </div>
  </Router>
)

const Weekly = () => (
  <div>
    <h2>Weekly Forecast</h2>
    <ul>
    <li>Monday</li>
    </ul>
  </div>
)

const Daily = () => (
  <div>
    <h2>Daily Forecast</h2>
    <ul>
    <li> It's gonna be cloudy today! </li>
    </ul>
  </div>
)


export default BasicExample