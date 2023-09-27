import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BsPauseCircleFill, BsFillPlayCircleFill, BsCheckLg } from 'react-icons/bs';

import './About.css';
import { images } from '../../constants/index';



const About = () => {
  const [pause, setPause] = useState(false);
  const vidRef = useRef(null);

  const handlePlayVideo = () => {
    if (!pause) vidRef.current.pause();
    else vidRef.current.play();
  }

  return (
    <div id='About' className='app__about'>
      <div className="app__about-left">
        <div className="app__about-video">
          <div className="video-overlay">
            <button onClick={ () => {
              handlePlayVideo();
              setPause(!pause);
            }}
            >
              { pause ? <BsPauseCircleFill /> : <BsFillPlayCircleFill /> }
            </button>
          </div>
          <video ref={ vidRef }  muted loop autoPlay>
            <source src={ images.video__1 } type="video/mp4" />
          </video>
        </div>
        <h1>Travel To <span>Morocco</span>, The Land of Spices.</h1>
      </div>
      <div className="app__about-right">
        <h1><span>We </span>Create the best food product</h1>
        <p>
        All the dishes have different tastes. Everything is available from fruits to vegetables, from Dairy food to seafood. Different countries have their speciality of dishes.
        </p>
        <ul className='app__about-list'>
          <li><BsCheckLg className='check' /> Food is our primary need</li>
          <li><BsCheckLg className='check' /> The food is in fact makes us to live in this world.  </li>
          <li><BsCheckLg className='check' /> The favorite food reflects our personal taste.</li>
        </ul>
        <Link to="SearchBar" className='app__about-more'>
          <button>See More</button>
        </Link>
      </div>
    </div>
  );
}

export default About;