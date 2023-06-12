import React from 'react';
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router, Route, Routes,
  } from 'react-router-dom';

import Principal from "./paginas/principal";
import Feed from './paginas/feed';
import {Communities} from './paginas/communities';
import { Profile } from './paginas/profile';
import { Create } from './paginas/create';


  function App() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Principal />} />
          <Route exact path="/feed" element={<Feed />} />
          <Route exact path = "/community/:id" element={<Communities/>}></Route>
          <Route exact path ="/profile" element={<Profile/>}></Route>

        </Routes>
      </Router>
  
    );
  }
  
  export default App;