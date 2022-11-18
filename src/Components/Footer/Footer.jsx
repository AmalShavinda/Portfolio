import React from 'react';
import './Footer.css';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';


const Footer = () => {
  return (
    <div className='footer'>
        <div className="f-content">
            <div className="f-icons">
                <Insta color='black' size='3rem'/>
                <Facebook color='black' size='3rem'/>
                <Github color='black' size='3rem'/>
            </div>
            <span>amalshavinda@gmail.com</span>
        </div>
      
    </div>
  )
}

export default Footer;
