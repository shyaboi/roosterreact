import React from 'react';
import Hero from './components/topbanner/index';
import Climber from '../src/components/climberBanner/index';
import Mom from './components/mombanner/index';

import './App.css';

function App() {
  return (
    <div className="App">
<Hero />
<Climber />
<Mom />
    </div>
  );
}

export default App;
