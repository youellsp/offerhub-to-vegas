import React, {useState} from 'react';
import './App.css';
import moment from 'moment';
require('moment-countdown');

function App() {
  const countdown = () => moment("2020-03-18").countdown().toString();
  const [timeUntilVegas, setTimeUntilVegas] = useState(countdown);

  setInterval(() => {
    setTimeUntilVegas(countdown)
  }, 1000);

  return (
    <div className="countdown-container">
      <div className="countdown">
        {timeUntilVegas}
      </div>
    </div>
  );
}

export default App;
