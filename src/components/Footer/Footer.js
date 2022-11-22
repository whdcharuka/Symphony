import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-a'>
        <p className='footer-a-heading'>
          dnjkesbfuye ferugfeui fbeurf bchsdbufye ncndiuhfw ncsiaudb cnsdbidu.
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link
              to='/'
            >
              Home
            </Link>
          </div>
          <div class='footer-link-items'>
            <Link
              to='/Services'
            >
              Services
            </Link>
          </div>
        </div>
          <div class='footer-link-items'>
            <Link
              to='/Contacts'
            >
              Contact
            </Link>
          </div>
          <div class='footer-link-items'>
            <Link
              to='/About'
            >
              About 
            </Link>
          </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
