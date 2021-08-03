import React from 'react';


        import Netlify from '../logos/netlify.svg'
        import Heroku from '../logos/heroku-icon.svg'
        import Jquery from '../logos/jquery.svg'
        import Sql from '../logos/sql2.svg'
        import Node from '../logos/nodejs.svg'

        import FR from '../logos/french.svg'
        import AR from '../logos/arabic.svg'
        import ES from '../logos/spanish.svg'
        import EN from '../logos/english.svg'
        import HS from '../logos/hassaniya.svg'
        import PT from '../logos/portugal.png'
        import Pro from '../logos/coding.svg'
        import LN from '../logos/language.svg'
        import Brain from '../logos/brain.svg'
        
        import Html from '../logos/html-5.svg'
        import Css from '../logos/css-3.svg'
        import Js from '../logos/javascript.svg'
        import Rt from '../logos/react.svg'
        import Py from '../logos/python.svg'
        import Bts from '../logos/boot.svg'
        import Ex from '../logos/ex.svg'
        import Ajx from '../logos/ajax.png'


const  Skills = (props) => {
 
    return (
        <>
                
 

<section>
            <header>Skills</header>

            <div className="skills">

            <div className="set">
                <span>
                  <img src={Brain} id="img-hd" alt="all font"/>
                  </span>
                <header> Proficient</header>

                <div className="list">
                  <label>React</label>
                  <i><img src={Rt} alt="all font"/></i>
                </div>
                <div className="list">
                  <label>Html5</label>
                  <i><img src={Html} alt="all font"/></i>
                </div>
                
                <div className="list">
                  <label>Javascript</label>
                  <i><img src={Js} alt="all font"/></i>
                </div>


                <div className="list">
                  <label>Css</label>
                  <i><img src={Css} aalt="all font"/></i>
                </div>

                <div className="list">
                  <label>Node.js</label>
                  <i><img src={Node} alt="all font"/></i>
                </div>
                <div className="list">
                  <label>Api's</label>
                  <i><img src={Ajx} alt="all font"/></i>
                </div>
                <div className="list">
                  <label>Express</label>
                  <i><img src={Ex} alt="all font"/></i>
                </div>
               

              

              </div> 
              <div className="set">
                <span>
                <i><img src={Pro} id="img-hd"alt="all font"/></i>
                  </span>
                <header>Knowledgable</header>

                <div className="list">
                  <label>PostgreSQL</label>
                  <i><img src={Sql} aalt="all font"/></i>
                </div>

                <div className="list">
                  <label>Bootstrap
             </label>
              <i><img src={Bts} alt="all font"/></i>
                </div>

                <div className="list">
                  <label>Jquery</label>
                  <i><img src={Jquery} alt="all font"/></i>
                </div>
                <div className="list">
                  <label>Python</label>
                  <i><img src={Py} alt="all font"/></i>
                </div>
                <div className="list">
                
                  <label>Netlify</label>
                  <i><img color={'green'} src={Netlify} alt="all font"/></i>
                </div>
                <div className="list">
                  <label>Heroku</label>
                  <i><img src={Heroku} alt="all font"/></i>
                </div>

                
</div>

           


              <div className="set">
                <span>
              <img src={LN} id="img-hd"/>
                  </span>
                <header>Foreign-Languages</header>

                

                <div className="list">
                  <label>French</label>
                  <i><img src={FR}/></i>
                </div>

                <div className="list">
                  <label>English</label>
                  <i><img src={EN}/></i>
                </div>
                <div className="list">
                  <label>Spanish</label>
                  <i><img src={ES}/></i>
                </div>
                <div className="list">
                  <label>Portuguese</label>
                  <i><img src={PT}/></i>
                </div>

                <div className="list">
                  <label>Arabic</label>
                  <i><img src={AR}/></i>
                </div>
                <div className="list">
                  <label>Hassaniya</label>
                  <i><img src={HS}/></i>
                </div>

              

              </div>
               
               

           
            </div>
          </section>


        </>
    );
}

export default Skills;