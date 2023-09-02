import React from 'react';
import './Hero.css';
import heroImg from '../../assets/anime1.jpg';
import SocialLinks from '../Navbar/SocialLinks/SocialLinks';
import Btn from '../Btn/Btn';

const Hero = () => {
  return (
    <header className="section hero">
      <div className="section-center hero-center">
        <article className="hero-info animate" data-animate="slideInLeft 2s">
          <div className="underline"></div>

          <h1>i'm a web developer</h1>
          <p>I love building beautiful web experience</p>

          <div className="hero-btn-wrapper">
            <Btn href="#about" name="about me" type="hero-btn" />
            <Btn href="#portfolio" name="portfolio" type="hero-btn" />
          </div>
          <SocialLinks />
        </article>

        <article className="hero-img animate" data-animate="slideInRight 2s">
          <img src={heroImg} className="hero-photo" alt="minh nguyen" />
        </article>
      </div>
    </header>
  );
};

export default Hero;
