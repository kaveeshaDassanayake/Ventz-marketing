import React from 'react';
import Navbar from './Navbar';
import picture from '../Assets/homepic.png';
import {FiArrowRight} from 'react-icons/fi';

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar/>
      <div className='home-banner-container'>
        <div className='home-text-section'>
            <h1 className='primary-heading' >
                Ventz - <br/>Platform for various types of Events
            </h1>
            <p className='primary-text' style={{lineHeight:1.6}}>
              Welcome to Ventz, your go-to platform for discovering and participating in a diverse array of events and activities! At Ventz, we're dedicated to simplifying event exploration and attendance while catering to the ever-evolving needs of both organizers and attendees.
            </p>
            {/* <button className='secondary-button'>
                Download now <FiArrowRight />{""}
            </button> */}
            <a href='https://expo.dev/artifacts/eas/bEBp9VVLFbKbiXcrXYBGr8.apk' className='secondary-button'>
                Download now <FiArrowRight />{""}
            </a>
            <a href='https://play.google.com/apps/test/com.wulfri.ventz/1' className='secondary-button-two'>
                Tester App <FiArrowRight />{""}
            </a>
            {/* <button className='secondary-button-two'>
                Download Tester App <FiArrowRight />{" "}
            </button> */}
        </div>
        <div className='home-image-section'>
            <img src={picture} alt='pic2'/>
        </div>
      </div>
    </div>
  )
}

export default Home
