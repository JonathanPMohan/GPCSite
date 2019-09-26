import React from 'react';
import winesData from '../../../helpers/data/winesData';
import PrintWineCard from '../../PrintWineCard/PrintWineCard';

import './Wines.scss';

class Wines extends React.Component {
  state = {
    wines: [],
  }

  getWines = () => {
    winesData.getAllWines()
      .then((wines) => {
        this.setState({ wines });
      })
      .catch((err) => {
        console.error('error with wines GET', err);
      });
  };

  componentDidMount() {
    this.getWines();
  }

  render() {

    const printClue = (clue => (
      <PrintWineCard
        key={clue.id}
        clue={clue}
      />
    ));

    return (
      <div className='clues mx-auto w-100'>
        <div className='clueWrap'>
          <button className="addClueBtn" id="addClue" onClick={this.newClueView}><i class="far fa-plus-square"></i>ADD CLUE</button>
        </div>
        <div className="row justify-content-center">{printClue}</div>
      </div>
    );
  }
}

export default Wines;

