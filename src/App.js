import React, {useEffect, useState} from 'react';
import './App.css';
import moment from 'moment';
import confetti from 'canvas-confetti';

require('moment-countdown');

function App() {
    const countdown = () => moment("2020-03-23 13:00").countdown();
    const difference = () => moment("2020-03-23 13:00").diff(moment());
    const [timeUntilVegas, setTimeUntilVegas] = useState(countdown);
    const [msTillVegas, setMsTillVegas] = useState(difference);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setTimeUntilVegas(countdown);
            setMsTillVegas(difference);
        }, 1000);

        return () => clearInterval(countdownInterval)
    }, [msTillVegas]);

    useEffect(() => {
        const defaults = {startVelocity: 60, spread: 360, ticks: 120, zIndex: 0};
        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(() => {
            if(msTillVegas < 0){
                confetti(Object.assign({}, defaults, {
                    particleCount: 100,
                    origin: {x: randomInRange(0.1, 0.3), y: Math.random() - 0.2}
                }));
                confetti(Object.assign({}, defaults, {
                    particleCount: 100,
                    origin: {x: randomInRange(0.7, 0.9), y: Math.random() - 0.2}
                }));
            }
        }, 250);

        return () => clearInterval(interval)
    }, [msTillVegas]);

    return (
        <div className="countdown-container">
            <div className="countdown">
                {msTillVegas > 0 && timeUntilVegas.toString() ? timeUntilVegas.toString() : 'Offer Hub is Live!'}
            </div>
        </div>
    );
}

export default App;
