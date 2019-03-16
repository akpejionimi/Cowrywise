import React from 'react';
import Smartdetails from './Smartdetails/Smartdetails';
import Smartphoto from './Smartphoto/Smartphoto'
import './Smart.css'


const Smart = () => {

    return (
        <>
        <div className="smart">
        <div className="smartdet">
       <Smartdetails/>
        </div>
        <div className="smartimg">
        <Smartphoto/>
        </div>
        </div>
        </>
    );

}


export default Smart;