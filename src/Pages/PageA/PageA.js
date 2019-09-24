import React from 'react';
import './PageA.scss';


class PageA extends React.Component {
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='pageA w-100'>
        <h2>WELCOME TO PAGE A</h2>
        <div className='PageAWrap'>
        </div>
        <div className="row justify-content-center"></div>
      </div>
    );
  }
}

export default PageA;
