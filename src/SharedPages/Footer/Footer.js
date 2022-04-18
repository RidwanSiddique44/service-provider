import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='footer-style'>
                <p className='text-secondary'>All right are reserved <FontAwesomeIcon icon={faCopyright} />: 2022</p>
            </div>
        </footer>
    );
};

export default Footer;