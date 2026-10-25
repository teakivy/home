import React from 'react'

const now = new Date();

import './Clock.css'

function Clock() {
    const [hours, setHours] = React.useState(getTime()[0]);
    const [minutes, setMinutes] = React.useState(getTime()[1]);
    const [seconds, setSeconds] = React.useState(getTime()[2]);
    const [amPm, setAmPm] = React.useState(getTime()[3]);

    React.useEffect(() => {
        const interval = setInterval(() => {
            const [hours, minutes, seconds, amPm] = getTime();
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
            setAmPm(amPm);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
  return (
    <div>
        <div className="clock">
            <span className="time-element">{hours}:{minutes}</span>
            {/* <span className="time-element colon">:</span>
            <span className="time-element seconds">{seconds}</span> */}
            <span className="am-pm">{amPm}</span>
        </div>
    </div>
  )
}

function getTime(): [string, string, string, string] {
    let minutes: string = now.getMinutes().toString();
    let hours: string = now.getHours().toString();
    let seconds: string = now.getSeconds().toString();
    let amPm: string = hours >= '12' ? 'PM' : 'AM';

    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }
    if (hours.length < 2) {
        hours = '0' + hours;
    }
    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }

    if (hours === '00') {
        hours = '12';
    } else if (parseInt(hours) > 12) {
        hours = (parseInt(hours) - 12).toString();
    }

    return [hours, minutes, seconds, amPm];
}

export default Clock