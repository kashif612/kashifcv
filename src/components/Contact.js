import React from 'react'
import {FaFacebookF,
    FaTwitter,
    FaPinterest,
    FaInstagram,

} from "react-icons/fa";
export const Contact = () => {
    return (
        <div className="contact">
        <div className="container">
            <div className="ContactSection">
               
                    
                     <div className="row justifyContent">
                     <div className ="col-6">
                      <div className="ContactSection-logo">
                     <h1>Kashif.Iqbal</h1>
                     </div>
                        <p>For the contact kindly go through my mail ID and phone number you can contact me very easily.</p> 
                         <ul className="ContactCircle">
                         
                         <li><FaFacebookF/></li>
                         <li><FaInstagram/></li>
                         <li><FaPinterest/></li>
                         <li><FaTwitter/></li>
                         
                        
                     </ul>
                     </div>
                </div>
            </div>
        </div>
            
                             </div>

    )
}

export default Contact;