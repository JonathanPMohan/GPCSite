import React from 'react';

import ourWines from '../../Images/our_wines.png';

import './PageB.scss';


class PageB extends React.Component {
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='pageB w-100'>
        <div className='PageAWrap'>
          <img src={ourWines} className='header-image' alt="our_wines" />
        </div>
        <div className="row justify-content-center"></div>
      </div>
    );
  }
}

export default PageB;
