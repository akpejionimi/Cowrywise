import React from 'react';
import './Safe.css'
import Safedesc from './Safedesc/Safedesc'
import Safepics from './Safepics/Safepics'


const Safe = () => {

    return (
        <>
            <div className="Safe">
                <div className="safedesc">
                    <Safedesc />
                </div>
                <div className="safepics">
                    <Safepics />
                </div>
            </div>
        </>
    );

}


export default Safe;