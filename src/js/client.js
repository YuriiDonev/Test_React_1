import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Artist from './components/Artist';
import ConcertPlace from './components/ConcertPlace';
import PerformanceRecords from './components/PerformanceRecords';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Artist}/>
    <Route path="/concert-place" component={ConcertPlace}/>
	<Route path="/performance-records" component={PerformanceRecords}/>
  </Router>,
app);
