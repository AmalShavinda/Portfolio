import React from 'react';
import '../Intro/Intro.css';
import Github from '../../Img/github.png';
import LinkedIn from '../../Img/linkedin.png';
import Instagram from '../../Img/instagram.png';
import Vector1 from '../../Img/Vector1.png';
import Vector2 from '../../Img/Vector2.png';
import Boy from '../../Img/boy.png';
import Thumbup from '../../Img/thumbup.png';
import Crown from '../../Img/crown.png';
import Glassesimoji from '../../Img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';


const intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I am</span>
                <span>Amal Shavinda</span>
                <span>Frontend Developer with high 
                level of experience in web designinig
                and development,
                producting the Quality Work</span>
            </div>
            <button className='i-button button'>Hire Me</button>
            <div className="i-icons">
              <a href='#'><img src={Github} alt=""/></a>
              <a href='#'><img src={LinkedIn} alt=""/></a>
              <a href='#'><img src={Instagram} alt=""/></a>
            </div>
        </div>
        <div className="i-right">
          <img src={Vector1} alt=""/>
          <img src={Vector2} alt=""/>
          <img src={Boy} alt=""/>
          <img src={Glassesimoji} alt=""/>
          <div style={{top: '-4%', left: '55%'}}>
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
          </div>
          <div style={{top: '65%'}}>
            <FloatingDiv image={Thumbup} txt1='Best Design' txt2='Award'/>
          </div>
          {/* blur divs */}
          <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
          <div className="blur" style={{background: "#C1F5FF", top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
        </div>
    </div>
  )
}

export default intro;
