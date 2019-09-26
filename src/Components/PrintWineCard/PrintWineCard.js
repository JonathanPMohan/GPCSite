import React from 'react';

import './PrintWineCard.scss';

class PrintWineCard extends React.Component {
  static propTypes = {
  }

  render() {
    const { wine } = this.props;

    return (
      <div className="card2 col-3">
        <h3 className="card-header">{wine.name}</h3>
        <div className="card-body" onClick={this.clueClick}>
          <img className="wineImage" src={wine.imageUrl} alt={wine.name} />
          <h4 className="card-text">{wine.location}</h4>
          <h5 className="card-text">{wine.style}</h5>
          <h6 className="card-text">{wine.notes}</h6>
        </div>
      </div>
    );
  }
}

export default PrintWineCard;
