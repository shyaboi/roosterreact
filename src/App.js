import React from 'react';
import Hero from './components/topBanner/index';
import Climber from '../src/components/climberBanner/index';
import Mom from './components/momBanner/index';
import Icon from './components/iconBanner/index';
import Kid from './components/kidBanner/index';
import Review from './components/reviewBanner/index'

import './App.css';

function App() {
  return (
    <div className="App">
<Hero />
<Climber />
<Mom />
<Icon />
<Kid />
<Review />
    </div>
  );
}

export default App;
