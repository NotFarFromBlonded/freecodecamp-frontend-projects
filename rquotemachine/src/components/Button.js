import React from 'react';

const Button = ({buttonName, clickHandler}) => (
<button onClick = {clickHandler}>{buttonName}</button>
);

export default Button;
