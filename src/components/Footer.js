import React from 'react';

import Rt from '../logos/react.svg'
import Bts from '../logos/boot.svg'
import Node from '../logos/nodejs.svg'

const Footer = (props) => {
    return (
        <footer style={{ backgroundColor: '#ffff',padding:'20px' }}>	
        <div style={{ textAlign: 'center', color:"black" }}>
        © Copyright 2021 Tijani Sylla.
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Built with
        <a href={"https://reactjs.org/"}>
        <img style={{width: 20, marginLeft:10, marginRight: 10}} src={Rt}  alt="my footer"/>
        </a>
        <a href={"https://react-bootstrap.github.io/"}>
        <img style={{width: 20, marginRight: 10}} src={Bts} alt="my footer" />
        </a>
        <a href={"https://nodejs.org/en/"}>
        <img style={{width: 20, marginRight: 10}} src={Node} alt="my footer"/>
        </a>
        </div>
        </footer>
    );
}

export default Footer;