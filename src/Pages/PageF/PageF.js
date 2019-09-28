import React from 'react';
import ourAwards from '../../Images/our_awards.png';
import './PageF.scss';


class PageF extends React.Component {
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='pageF w-100'>
        <div className='PageAWrap'>
          <img src={ourAwards} className='header-image' alt="our_awards" />
        </div>
        <div className="row justify-content-center"></div>
      </div>
    );
  }
}

export default PageF;