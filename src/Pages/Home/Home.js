import React from 'react';
import './Home.scss';


class Home extends React.Component {
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='home w-100'>
        <h2>WELCOME HOME</h2>
        <div className='HomeWrap'>
        </div>
        <div className="row justify-content-center"></div>
      </div>
    );
  }
}

export default Home;
