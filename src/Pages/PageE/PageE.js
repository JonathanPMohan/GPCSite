import React from 'react';

import ourWeddings from '../../Images/weddings.png';
import './PageE.scss';


class PageE extends React.Component {
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='pageE w-100'>
        <div className='PageAWrap'>
          <img src={ourWeddings} className='header-image' alt="our_weddings" />
        </div>
        <div className="row justify-content-center"></div>
      </div>
    );
  }
}

export default PageE;
