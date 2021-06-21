import React, { useState } from 'react';
import DownloadIcon from '../Assets/download.svg';

export default function Header() {

    const [name, setName] = useState('My CV');
    const [width, setWidth] = useState(5);

    function changeHandler(e) {
        setName(e.target.value);
        setWidth(e.target.value.length);
    }

    return(
        <div className="RBHeader">
            <input 
                className="resumeName" 
                onChange={changeHandler} 
                value={name}
                style={{ width : width + 'ch'}}
            />
            <img className="resumeDownloadIcon" src={DownloadIcon} />
        </div>
    )
}
// setName(e.target.value)