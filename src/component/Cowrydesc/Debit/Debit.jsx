import React from 'react';
import './Debit.css'
import DebitPics from '../Debit/add-card.svg';


const Debit = () => {

    return (
        <>
            <div className="Account">
            <div className="Account-desc">
                    <p className="identity">2</p>
                    <h2>Link Your Debit Card</h2>
                    <p>Using your ATM Card/Debit Card, create your first saving plan by specifying
                         how much you want to save, when to start and how often. You can create additional plans later.</p>
                </div>
                <div className="Account-pics">
                    <img className="illus-card" src={DebitPics} alt="ill"/>
                </div>
                
            </div>
        </>
    );

}


export default Debit;