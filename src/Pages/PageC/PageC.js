import React from 'react';
import './PageC.scss';


class PageC extends React.Component {
  state = {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='pageC w-100'>
        <h2>VISIT ENGELHEIM</h2>
        <div className='PageAWrap'>
          <p>

            <h2>Engelheim Vineyards</h2>

            127 Lakeview Road
            Ellijay, GA 30540
            706-635-9463

            [EMAIL] sales@engelheim.com

            <h2>Tasting Room Hours:</h2>

            We are open 7 days a week, Mon, Tues, Weds, Thur, Sat and Sun from 12:30-6 pm. Friday 12:30-8pm (featuring live music) NOTE: We will be CLOSED on Easter Sunday.

            We are pet friendly, as long as your pets are friendly!
             Wine Tastings:

            We offer two levels of wine tastings. Level 1, $12 for 5 wines or Level 2, $14 for 5 wines and a delicious wine soaked Hummingbird Bite!

            No reservations are required!
            Vineyard & Winery Tours:

            Tours with the vineyard Owner/Winemaker are available on weekends by appointment only. Tours are Approximately 45 mins-1 hour, $15.00 person. Please call ahead to book.

            Saturday, Sunday: We conduct 1 tour, usually around 3 pm. Please call ahead on day of tour to check for availability.

            Large group tours (20 or more guests) and tours during the week are by appointment only, call for details!

            Group discounts available. Please contact sales@engelheim.com for more information.

          </p>
        </div>
        <div className="row justify-content-center"></div>
      </div>
    );
  }
}

export default PageC;
