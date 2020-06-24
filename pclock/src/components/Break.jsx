import React from 'react';
import moment from 'moment';

const Break = (props) => {
    const {
        breakLength,
        incrementBreakLength,
        decrementBreakLength
    } = props;
    const inMinutes = moment.duration(breakLength, 's').asMinutes();
    return (
        <div>
            <p id = "break-label">Break Length</p>
            <p id = "break-length">{inMinutes}</p>
            <button id = "break-decrement" onClick = {decrementBreakLength}>-</button>
            <button  id = "break-increment" onClick = {incrementBreakLength}>+</button>
        </div>
    );
};

export default Break;