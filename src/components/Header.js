import React from 'react'
import Resume from '../images/Resume5.pdf'
import Cert from '../images/uic.pdf'
import Navbar from './Navbar/Navbar'
import {Link} from 'react-scroll'
import { Spring, animated} from 'react-spring/renderprops'
import { FaGithub} from 'react-icons/fa'
import Typical from 'react-typical'

const Header = () => {

  return (
    <div className="main">
     
      <Navbar/>
      
       {/*======================================== Name ======================================== */}

      <div className="name">
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={1200} config={{ tension: 140, friction: 400 }}>
                {props => (
                    <div>
                        <animated.div style={props}>   <p className="heading"></p>
        <h1>
          I'm
          <span>
            Tijani
          </span>
          Sylla
        </h1>
        </animated.div>
                    </div>
                )}
            </Spring>
   
   


        {/*======================================== Wrapper ======================================== */}
        <div className="wrapper">
         { {Typical} ? <h3> 
       <Typical 
        style={{color : 'white'}}
        loop={1}
        wrapper="span"
        steps={[
          
                'Hello 👋' , 4000,
                'Welcome to my Portfolio ! 🙂 ', 4000,
                'My name is Tijani Sylla', 4000,
                'Im a Fullstack-Developer 💻 ' , 4000,
                'Based in Chicago 🏙️ ',4000,
                'learn more about me down below 👇' , 4000,
              
               
              
              
              
              ]}
            
      />
            </h3> : ''}
            {/* <ul className="dynamic-text">
          
            <li>
                <span id="span">Full-Stack...</span>
              </li>
              <li>
                <span id="span">Developer</span>
              </li>
              
              <li>
                <span>Translator</span>
              </li>
                </ul>*/}
             

          </div> 
        

        <p className="details">
          Full-Stack Developer
        </p>

{/*======================================== Buttons======================================== */}
        <div className="header-btns">
      
          <Link className="btn-1" to="contact-input" spy={true} smooth={true} offset={-20} duration={2000} >
            Hire me
          </Link>
          
          <a href={Resume} download className="btn-2">
            Resume
          </a>
          
          <a href={Cert} download className="btn-2">
            Certificate
          </a>
          </div>

          
        
        {/*===================== Closing =================== */}
        </div>
      <div className="arrow"></div>
    </div>
  )
}

export default Header
