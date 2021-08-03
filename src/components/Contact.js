import React, {useState} from "react";
import "dotenv";
// import ReCAPTCHA from "react-google-recaptcha";
import Modal from 'react-modal';

import {FaTimes} from "react-icons/fa"
import Imgreact from '../logos/react.svg'

const Contact = () => {
 
  const [modalIsOpen,
    setIsOpen] = useState(false);

  const [mailerState,
    setMailerState] = useState({name: "", email: "", message: ""});
  const [sendin,
    setSending] = useState(false);

  const submitEmail = async(e) => {

    e.preventDefault();

    // ===========FALSE============//
    setSending(true)
    setIsOpen(false)
    console.log({mailerState});


    // ===========REACT_APP_API and refresh the server if not it will undefined  ;) ============//
    const response = await fetch(`${process.env.REACT_APP_API}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
        
      },
      body: JSON.stringify({mailerState})
      
    }).then((res) => res.json()).then(async(res) => {
      const resData = await res;
      console.log(resData);
      // ===========FALSE============//
      setSending(false)
      setIsOpen(false)
      
      if (resData.status === "success") {
        //  alert('message sent!')

      } else if (resData.status === "fail") {
        alert("Message failed to send");
      }

    }).then(() => {
      setMailerState({email: "", name: "", message: ""});

    });
  };
  console.log('SECRET:',`${process.env.REACT_APP_API}`)
  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));

  }



  //======REACR_MODAL=======//

  function openModal() {

    setTimeout(function () {
      setIsOpen(true)

    }, 3000);

  }
  

  function closeModal() {
    setIsOpen(false);
    
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
      
    }
  };
 
  return (
    <div className='contact'>
      <div className="contact-input">

        <form onSubmit={submitEmail}>
          <fieldset>
            <legend>Contact</legend>

            <label className="label">Name</label>

            <input
              type="text"
              placeholder="Your name"
              required
              onChange={handleStateChange}
              name="name"
              value={mailerState.name}/>

            <label className="label">Email</label>

            <input
              type="text"
              placeholder="Exemple@gamil.com"
              onChange={handleStateChange}
              name="email"
              value={mailerState.email}
              required/>

            <label className="label">
              Message</label>

            <textarea
              placeholder="Message..."
              onChange={handleStateChange}
              name="message"
              value={mailerState.message}
              required/> {!sendin && <button type="submit" className="form-btn">
              Send Message</button>}
            
             
              {sendin && 
            <div className="Loading">
           <img src={Imgreact} className="react-img" alt={Imgreact}/>

        <h3>Send message...</h3>
      
      </div>}

      {sendin && <div> {openModal()} </div>}
           
              
           

          </fieldset>
        </form>

        {/* <button onClick={openModal}>Click me</button> */}
           <Modal

              isOpen={modalIsOpen}
              style={customStyles}
              appElement={document.getElementById('app')}
              //to avoid modal errors
              ariaHideApp={false}
              onClick={closeModal}>
               
             
             <FaTimes onClick={closeModal }


              >close</FaTimes>
              <div>
              <h3>Message Sent !</h3>
              <h6>I will respond to you as quickly as possible!</h6>
              </div>

           </Modal> 

       

      </div>

    </div>
  );

}

export default Contact;