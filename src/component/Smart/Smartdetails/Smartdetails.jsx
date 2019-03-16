import React from 'react';

import './Smartdetails.css'


const Smartdetails = () => {

    return (
        <>
        <div className="smartdetails">
            <div className="headtext">
                <h1>Save & Invest,</h1>
                <h1>the smart way.</h1>
            <p>Automate your savings and earn 10% - 15% interest per annum.</p>
            <p className="smart-p">No penalties. No fees. Absolutely free.</p>
            </div>
            <div className="os">
           <div className="android box">
            <img className="os-logo" src="https://www.cowrywise.com/images/landing/google-play-badge.svg" alt="badge"/>
            </div>
           <div className="apple box"> 
           <img className="os-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png" alt="apple badge"/>
           </div>
           </div>
            </div>
        </>
    );

}


export default Smartdetails;