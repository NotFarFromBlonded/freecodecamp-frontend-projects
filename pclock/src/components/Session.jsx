import React from 'react';
import moment from 'moment';

const Session = (props) => {
    const {
        sessionLength,
        decrementSessionLength,
        incrementSessionLength
    } = props;
    
    const inMinutes = moment.duration(sessionLength, 's').minutes();   
    return (
        <div>
            <p id = "session-label">Session length</p>
            <p id = "session-length">{inMinutes}</p>
            <button id = "session-decrement" onClick = {decrementSessionLength}>-</button>
            <button  id = "session-increment" onClick = {incrementSessionLength}>+</button>
        </div>
    );
};

export default Session;