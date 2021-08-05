
import {FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import React from 'react';
import image from '../images/sylla2.png'
import Skills from './Skills'

import ShowMoreText from 'react-show-more-text';

const About = () => {

 
  // const [executeOnClick] = useState(false)

  return (
    <div className="about">

      <div className="about-text">

        <h1>About me</h1>

        <div className="about-model">

          <img src={image} alt="logo"/>

          <div className="links-info">

            <i className="my-font-a">
              <a href="https://github.com/tijanisylla?tab=repositories"><FaGithub/></a>
            </i>
            <i className="my-font-a">
              <a href="https://www.linkedin.com/in/tijani-sylla-47b2541b0/"><FaLinkedin/></a>
            </i>
            <i className="my-font-a">
              <a href="https://www.facebook.com/tijani.sylla"><FaFacebook/></a>
            </i>

          </div>

        </div>

        <ShowMoreText lines={6} 
        more='Show more' 
        less='Show less'
         className='content-css'
          anchorClass='my-anchor-css-class'
          expanded={false}
           width={800}> 
           
      

          <p className='content-css'>
            My name is Tijani Sylla I was born and raised in Mauritania, a country with a
            small population on the west coast of Africa, and hold dual citizenship with
            Portugal. Growing up in a multilingual environment inspired my first passions,
            learning languages and traveling. Currently I speak six languages, including two
            African dialects, and have lived in five countries over three continents. I’ve
            expanded my knowlege of cultures, and their accompanying languages throughout my
            travels. From Mauritania, I traveled to Portugal to understand my family roots
            further. From Portugal, I visited France and ended up staying a while. Two years
            later I moved to Spain, my favorite place so far, dancing and meeting people
            from all over the world until I met my wife, Madeleine. She was visiting from
            the United States, so naturally I followed her there. Now, almost two years
            since our wedding, we have two rambunctious dogs. Thought I was going to say
            kids, huh? Not yet, but maybe in a few years. Right now, while my wife grows her
            career in real estate, I’m focusing on a new language, programming. I hope to
            learn and expand my experience through the projects featured on this site.
          </p>
        </ShowMoreText>

        <Skills/>

      </div>

    </div>

  );
}

export default About;
