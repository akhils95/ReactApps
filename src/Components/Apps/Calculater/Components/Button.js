import React from 'react';

function Button(props) {
    const { cName, value, display, onClick } = props;
    return(<button className={cName ? cName+ ' calcBtn' : '' + ' calcBtn'} value={value ? value :''} onClick={onClick}>{display}</button>)
}

export default Button;