import axios from 'axios';
import React from 'react';
import store from "../redux-store";
import { assign } from '../redux-store/slices/PopUp';
import { PopUp } from '../react/componentes/reusable/popup/PopUp';

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {

    console.log('Intercepted Response:', response);

    return response; // Always return the response to propagate it
  },
  function (error) {
    if(error.response.status == 401) {

      
      console.warn("igual no tan bobo");

      store.getState().popUp.value == null  ?  store.dispatch(assign({
      block: true,
      value: <PopUp title="Su sesión ha caducado" value="Por favor, vuelva a iniciar sesión" effect = {"logout"} />
      
      })) : null
       
      
     
    } 

    return Promise.reject(error);

  }
);
