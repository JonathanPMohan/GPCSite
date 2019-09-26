import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import PageA from '../Pages/PageA/PageA';
import PageB from '../Pages/PageB/PageB';
import PageC from '../Pages/PageC/PageC';
import PageD from '../Pages/PageD/PageD';
import PageE from '../Pages/PageE/PageE';
import PageF from '../Pages/PageF/PageF';
import MyNavBar from '../Components/MyNavBar/MyNavBar';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <MyNavBar />
          <div>
            <Switch>
              <Route path='/home'
                component={() => <Home />} />
              <Route path='/' exact component={() => <Home />} />
              <Route path='/AboutUs' component={() => <PageA />} />
              <Route path='/OurWines' component={() => <PageB />} />
              <Route path='/VisitUs' component={() => <PageC />} />
              <Route path='/Events' component={() => <PageD />} />
              <Route path='/Weddings' component={() => <PageE />} />
              <Route path='/Awards' component={() => <PageF />} />

            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
