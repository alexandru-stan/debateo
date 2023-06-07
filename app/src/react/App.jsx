import React from 'react';
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router, Route, Routes,
  } from 'react-router-dom';

import Principal from "./paginas/principal";
import Feed from './paginas/feed';
import {Communities} from './paginas/communities';

  







  function App() {
    return (
      <Router>
        <Routes>
        
          <Route exact path="/" element={<Principal />} />
          <Route exact path="/feed" element={<Feed />} />
          <Route exact path = "/community/:id" element={<Communities/>}></Route>
        </Routes>
      </Router>
  
    );
  }
  
  export default App;