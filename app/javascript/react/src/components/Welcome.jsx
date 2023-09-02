import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import PortfolioList from './PortfolioList';
import Navbar  from './Navbar/Navbar';
import Hero from './Hero/Hero';

const Welcome = () => {

  return (
    <div className='welcome-container'>
        <Navbar />
      <header className='header'>
        <Hero />
      </header>

      <main className='main-content'>
        <div className='main-container'>
          <h2 className='section-title'>My Projects</h2>
          <PortfolioList />
        </div>
      </main>

      <footer className='footer'>
        <p>&copy; 2023 Your Name. All rights reserved.</p>
      </footer>

    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Welcome />, document.getElementById('welcome'));
});

export default Welcome;
