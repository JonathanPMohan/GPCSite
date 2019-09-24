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
              <Route path='/pageA' component={() => <PageA />} />
              <Route path='/pageB' component={() => <PageB />} />
              <Route path='/pageC' component={() => <PageC />} />
              <Route path='/pageD' component={() => <PageD />} />
              <Route path='/pageE' component={() => <PageE />} />

            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
