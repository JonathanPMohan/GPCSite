import React from 'react';

import homeLogo from '../../Images/eng_logo_home.png';

import './Home.scss';


class Home extends React.Component {
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='home w-100'>
        <img src={homeLogo} alt="Home Logo" />
        <div className='HomeWrap'>
        </div>
        <div className="row justify-content-center"></div>
      </div>
    );
  }
}

export default Home;
