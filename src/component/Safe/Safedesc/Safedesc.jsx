import React from 'react';
import './Safedesc.css'


const Safedesc = () => {

    return (
        <>
            <div className="Safedesc">
                <div className="safedetails">
                    <h2>How Safe Is My Money?</h2>
                    <p>CowryWise was built with Bank-Grade security features. We work with a PCIDSS compliant payment processor for the security of data. Our assets are held with Meristem Trustees,
                         an SEC registered firm, who ensures saver’s funds are covered by invested asset.</p>
                </div>
                <div className="safeicons">
                    <div className="safeicons-items">
                        <img className="secure" src="https://www.cowrywise.com/images/icons/encryption.svg" alt="Security" />
                        <p className="secure-text">Bank Grade Security</p>
                    </div>
                    <div className="safeicons-items">
                        <img className="secure" src="https://www.cowrywise.com/images/icons/2-factor.svg" alt="Authentication" />
                        <p className="secure-text">Two Factor Authentication</p>
                    </div>
                    <div className="safeicons-items">
                        <img className="secure" src="https://www.cowrywise.com/images/icons/safe-lock.svg" alt="key" />
                        
                        <p className="secure-text">Assets Under Trusteeship</p> 

                                       
                    </div>
                </div>
            </div>
        </>
    );

}


export default Safedesc;