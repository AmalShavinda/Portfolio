import React from 'react'
import './Services.css'
import HeartEmoji from '../../Img/heartemoji.png'
import Glasses from '../../Img/glasses.png'
import Humble from '../../Img/humble.png'
import Card from '../Card/Card'
import Resume from './Resume.pdf'

function Services() {
  return (
    <div className="services">
      {/* left side*/}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>Lorem ispum is simpley dummy text of printing of printing Lorem <br/>
        ispum is simpley dummy text of printing</span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
      </div>

      {/* right side*/}
      <div className="cards">
        <div style={{left: '25rem'}}>
            {/* first card */}
            <Card 
                emoji={HeartEmoji} 
                heading={'Design'} 
                details={'Figma, Sketch, Photoshop, Adobe, Adobe XD'}
            />
        </div>
        <div style={{left: '6rem', top: '10rem'}}>
           {/* second card */}
           <Card 
                emoji={Glasses} 
                heading={'Developer'} 
                details={'Html, Css, Javascript, React, Node JS, Express'}
            />
        </div>
        <div style={{left: '22rem', top: '20rem'}}>
           {/* Third card */}
           <Card 
                emoji={Humble} 
                heading={'UI/UX'} 
                details={'Visual Design, Interaction Design, Wireframes & Prototypes'}
            />
        </div>
        <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
      </div>
    </div>
  )
}

export default Services
