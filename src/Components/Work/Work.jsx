import React from 'react';
import './Work.css';
import Upwork from '../../Img/Upwork.png';
import Fiverr from '../../Img/fiverr.png';
import Amazon from '../../Img/amazon.png';
import Shopify from '../../Img/Shopify.png';
import Facebook from '../../Img/Facebook.png'

const Work = () => {
  return (
    <div className='work'>
        {/* left side */}
        <div className="awesome">
            <span>Proudly works for these</span>
            <span>Brands & Clients</span>
            <span>
                Lorem ispum is simpley dummy text of printing of printing Lorem 
                <br/>
                ispum is simpley dummy text of printing
                <br/>
                ispum is simpley dummy text of printing text of printing
                <br/>
                ispum is simpley dummy text
            </span>

        <button className='button s-button'>Hire Me</button>
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>

        {/* right side */}
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt='' />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt='' />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt='' />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt='' />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt='' />
                </div>
            </div>
            {/* backgrond Circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle greenCircle"></div>
        </div>
    </div>
  )
}

export default Work
