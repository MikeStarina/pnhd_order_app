import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from '../header/header.jsx';
import Progressbar from '../progress-bar/progress-bar.jsx';
import Main from '../../pages/main/main.jsx';
import Footer from '../footer/footer.jsx';



export default function App() {




  return (
    
    
    <Router>
      <Header />
      <Progressbar />
        <Switch>
          
          <Route path='/' exact={true}>
            <Main />
          </Route>

          <Route path='/textile' exact={true}>
            
          </Route>
          
        </Switch>
      <Footer />
    </Router>
    
  );
}


