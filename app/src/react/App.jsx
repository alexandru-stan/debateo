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
import { Prueba } from './Prueba';
import { Admin } from './paginas/admin';



  function App() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Principal />} />
          <Route exact path="/feed" element={<Feed />} />
          <Route exact path = "/community/:id" element={<Communities/>}></Route>
          <Route exact path ="/profile" element={<Profile/>}></Route>
          <Route exact path="/prueba" element={<Prueba/>}></Route>
          <Route exact path="/upload/:id" element={<Create/>}></Route>
          <Route exact path="/admin/:id" element={<Admin/>}></Route>

        </Routes>
      </Router>
  
    );
  }
  
  export default App;