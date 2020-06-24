import React from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

const Timer = (props) => {
    const {
        sessionLength,
        breakLength,
        sessionType,
        handlePlayPause,
        timeLeft,
        isStarted
    } = props;
    
    const timeLeftFormat = moment.duration(timeLeft, 's').format('mm:ss', {trim: false});
    
    return(
        <div>
            <p id = "timer-label">{sessionType}</p>
            <p id = "time-left">{timeLeftFormat}</p>
            <button onClick = {handlePlayPause}>{isStarted}</button>
        </div>
    );
};

export default Timer; 