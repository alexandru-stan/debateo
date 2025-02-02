import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router, Route, Routes,
    useLocation,
    useNavigate,
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
import { LateralMenu } from './componentes/reusable/lateralmenu/LateralMenu';
import { update as tokenUpdate } from '../redux-store/slices/LateralRender';
import axios from 'axios';
import { SERV_DIR,SERV_PORT } from '../utilities';
import { Mensajes } from './componentes/reusable/mensajes/mensajes';

// import { useState } from 'react';
  function App() {
    
    const popUpVal = useSelector(state => state.popUp.value);
    // const userData = useSelector(state =>state.sessionToken.value);
    const dispatch = useDispatch();
    const lateralRender = useSelector(state => state.lateralRender.value)
    const messagesRender = useSelector(state => state.messagesRender.value);

    
    
    
    return (
     
      <Router>
      <div  className={popUpVal?.block ? 'opacity-50 noscroll ' : ""}>
        {lateralRender ? <>
        <LateralMenu/> 
        {messagesRender ? <Mensajes/> : null}
        
        </>  : null  } 
          <Routes>
          <Route exact path="/" element={localStorage.getItem('userData')!=undefined ? <Feed /> : <Principal />} />
          <Route exact path="/feed" element={<Feed />} />
          <Route exact path = "/community/:id" element={<Communities />}></Route>
          <Route exact path ="/profile" element={<Profile />}></Route>
          <Route exact path="/prueba" element={<Prueba />}></Route>
          <Route exact path="/upload/:id" element={<Create />}></Route>
          <Route exact path="/admin/:id" element={<Admin />}></Route>
          <Route exact path="/new/community" element={<NewCommunity />}></Route>
          <Route exact path="/:id/comments" element={<Comments />}></Route>

        </Routes>
        </div>
       {popUpVal != null ? popUpVal.value : null } 
      </Router>
     
    
    
    );
  }
  
  export default App;