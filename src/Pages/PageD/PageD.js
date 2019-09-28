import React from 'react';

import ourEvents from '../../Images/events.png';
import './PageD.scss';


class PageD extends React.Component {
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='pageD w-100'>
        <div className='PageAWrap'>
          <img src={ourEvents} className='header-image' alt="our_events" />
        </div>
        <div className="row justify-content-center"></div>
      </div>
    );
  }
}

export default PageD;
