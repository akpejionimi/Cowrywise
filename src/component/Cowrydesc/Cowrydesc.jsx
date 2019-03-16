import React from 'react';
import Account from './Account/Account'
import Debit from './Debit/Debit'
import Grow from './Grow/Grow'
import './Cowrydesc.css'


const Cowrydesc = () => {

    return (
        <>
        <div className="Cowrydesc">
        <div className="head-desc">
        <h2>How Saving On CowryWise Works</h2>
        <p>In 3 easy steps, start your smart saving journey into financial freedom.</p>
        </div>
        <Account/>
        <Debit/>
        <Grow/>
        </div>
        </>
    );

}


export default Cowrydesc;