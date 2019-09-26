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
        <h2>ABOUT ENGELHEIM</h2>
        <div className='PageAWrap'>
          <p>
            Engelheim Vineyards focuses on growing outstanding grapes to produce the highest quality of wines. Our objective is to give all glory to God while integrating our German heritage and our Appalachian home. We also hope to honor the original residents of Engelheim, the Cherokee Nation. The owners, Gary and Jan Engel and their family, decided to purchase the land that is now known as Engelheim (German for “Angel Home”) in 2007. After Colonel Engel retired from the Army in 2004 and upon his return from Iraq and Kuwait, they decided to live their dream of living in the North Georgia Mountains to grow the finest quality grapes. The Engel family planted their first vines in 2009 and harvested their first vintage in 2011; Engelheim Vineyards has been going strong ever since.
            For the Engel family, it is about quality of life and touching other lives. Gary’s love for and family heritage of farming has driven the Engels to establish the vineyards, a tasting lodge, and the winery. Their dream also focuses upon building a future for their family.
</p>
          <p>


            Their family venture has rewarded them with maintaining a focus on strong Christian values and the gift of seeing first hand how God provides our grapes. The family gives all thanks to God for allowing them to take care of this piece of His beautiful world and to live in harmony with His perfect plan. They truly are living the dream at Engelheim Vineyards.
            Through their wine tastings in Georgia Engelheim offers the public opportunities to sample and purchase their wines at leisure.
            Have you ever wanted to learn how the professionals pair wine with food? Engelheim works with chefs and wine-pairing instructors to bring wine pairing classes to our customers. They also produce wine pairing dinners, dinners in the vineyard, art events, music events, and wine festivals.
            Engelheim Vineyards is a participating member of the Gilmer County Chamber of Commerce, the Georgia Wine Association and is a stop on the Georgia Wine Highway’s Spring tour.
            Engelheim Vineyards offers beautiful venue space for weddings, graduation parties, anniversaries, or any other party you can imagine.

</p>
        </div>
        <div className="row justify-content-center"></div>
      </div>
    );
  }
}

export default PageA;
