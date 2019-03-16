import React from 'react';
import './Grow.css'
import GrowPics from '../Grow/growth.svg';


const Grow = () => {

    return (
        <>
            <div className="Grow">
            <div className="Account-illus">
                    <img className="grow-card" src={GrowPics} alt="ill"/>
                </div>
            <div className="Grow-desc">
                    <p className="identity-G">3</p>
                    <h2>Watch Your Savings Grow!</h2>
                    <p>CowryWise will automatically handle all your savings henceforth. 
                        We put your money to work so you can earn competitive interests on a daily basis. Your bank will be jealous.</p>
            <div className="signIn-grow">
               <button className="signIn-btn">Sign Up Now</button>
                </div>
                </div>
            </div>
        </>
    );

}


export default Grow;