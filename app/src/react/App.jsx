import React, { useEffect } from 'react';
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
import { NewCommunity } from './paginas/newCommunity';
import { Comments } from './paginas/comments';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { PopUp } from '../react/componentes/reusable/popup/PopUp';
import { update } from '../redux-store/slices/IncomingMessage';
import newMessage from "../assets/audio/newMessage.mp3";
import { stompClient } from "../webSocketTesting/webSocket";

  function App() {
    
    const popUpVal = useSelector(state => state.popUp.value);
    const incomingMessage = useSelector(state => state.incomingMessage.value);
    





    return (
     
      <Router>
      <div  className={popUpVal!=null ? 'opacity-50 noscroll ' : null}>
        <Routes>
          <Route exact path="/" element={<Principal />} />
          <Route exact path="/feed" element={<Feed />} />
          <Route exact path = "/community/:id" element={<Communities/>}></Route>
          <Route exact path ="/profile" element={<Profile/>}></Route>
          <Route exact path="/prueba" element={<Prueba/>}></Route>
          <Route exact path="/upload/:id" element={<Create/>}></Route>
          <Route exact path="/admin/:id" element={<Admin/>}></Route>
          <Route exact path="/new/community" element={<NewCommunity/>}></Route>
          <Route exact path="/:id/comments" element={<Comments/>}></Route>

        </Routes>
        </div>
       {popUpVal != null ?popUpVal : null } 
      </Router>
     
    
    
    );
  }
  
  export default App;