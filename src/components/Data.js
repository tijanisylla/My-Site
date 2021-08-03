
import Calculator from '../images/calculator.png'
import Snake from '../images/Snake.png'
import Hub from '../images/Userhub.png'
import Things from '../images/Strange.png'
import Art from '../images/art.png'
import Station from '../images/Station.png'
import Draw from '../images/Draw.png'
import Shopp from '../images/Shopp.png'
import  Fitness from '../images/Fitness.png'
import  Cart from '../images/cart.png'
import  Animation from '../images/animation.png'
import  Validation from '../images/Validation.png'

const Data = [
    

    {
      type: "Spades-Station",
      image: `${Station}`,
      link: 'https://sylla-spadesshopper.herokuapp.com/',
      description: "● E-commerce website for classic games" + 
       "Built database and structure for the app’s content"
      
    }, 
    
    {
      type: "Calculator",
      image: `${Calculator}`,
      link: 'https://calculator-sylla.netlify.app',
      description: "●  Calculator built with Jquery CSS." 
          
    }, {
      type: "Snake",
      image: `${Snake}`,
      link: 'https://snake-sylla.netlify.app',
      description: " ●  'Snake'  built with HTML CSS and Javascript ! Hope you enjoy !" 
          
    }, {
      type: "Retro-draw",
      image: `${ Draw }`,
      link: 'https://retro-draw-sylla.netlify.app',
      description: "● Drawing board, built with Jquery CSS " 
          
    }, {
      type: "Stranger-Things",
      image: `${Things}`,
      link: 'https://stranger-things1.netlify.app',
      description: "● A log-in website, Built with Reactjs, Each user have his own Authentication or Token" ,
          
      type: "UserHub",
      image: `${Hub}`,
      link: 'https://userhub-js.netlify.app',
      description: "●  A navigating site built with Jquery CSS"
       
    }, {
      type: "Art-collector",
      image: `${Art}`,
      link: 'https://art-collector.netlify.app',
      description: "● A navigating site to serch for a specific post and more...built with Jquery HTML CSS"
         
    },{
      type: "Shopping",
      image: `${Shopp}`,
      description: "● A changed color clothes site, to select wich color the user like  " 
     

    },
    {
      type: "Animation",
      image: `${Animation}`,
      link: 'https://animation-js-sylla.netlify.app',
      description: "● A cool animation site, built HTML CSS vanilla JS "
         
    },

      {
        type: "Fitness",
        image: `${Fitness}`,
        link: 'https://fitnesstrackerr.netlify.app',
        description: "● Community site for creating and sharing exercise routines  "
           
  
      },{
          type: "Cart",
          image: `${Cart}`,
          link: 'https://carte-storage.netlify.app',
          description: "● It's a shopping carte web app, built with Reactjs, each item added to carte is stored in the localstorage in case the user come back at any other time and the carte is still stored "
              
    
    
      },{
        type: "Form-Validation",
        image: `${Validation}`,
        link: 'https://form-validation-sylla.netlify.app',
        description: "●  A validation form HTML CSS"
            
      }
    
    ]



export default Data;



