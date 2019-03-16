import React from 'react';
import './Savings.css'


const Savings = () => {

    return (
        <>
            <div className="Savings">
                <div className="save-desc">
                    <h2>Different Ways To Save.</h2>
                    <p>  A CowryWise account brings you a step closer to financial discipline.
                         We make it easy to achieve your personal saving goals. Choose how you save.
                    </p>
                </div>
            </div>
            <div className="save-types">
            <div className="periodic type-style">
            <img className="save-pics" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR5h2sCy7RsZYH1uMw3EtmIM4PT8nhtRSrwfvWqQgfnZ8nUDnJ" alt="calender"/>
            <h2>Periodic Savings</h2>
            <p>Automatically save an amount at regular intervals and earn 10% interest rate per annum.</p>
            </div><div className="fixed type-style">
            <img className="save-pics" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKs40phsp1cPYDu_1AzKoqac61hRdEG1qiRiQQbRS7RXj2NebkA" alt="fixed"/>
            <h2>Fixed Savings</h2>
            <p>Lock away a lump sum for long periods. The longer the period, the higher the interest rate.</p>
            </div><div className="one-time type-style">
            <img className="save-pics" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEysRD2ZhKlg5xGCzGlkSgprMvyMcHEr-lfF4XDcEPlPn6zAn" alt="money"/>
            <h2>One Time savings</h2>
            <p>Have a free cash lying idle? Make one time saving into any of your existing saving plans.</p>
            </div>
            </div>
        </>
    );

}


export default Savings;