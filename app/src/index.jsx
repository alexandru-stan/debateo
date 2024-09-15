// ESTE SCRIPT SERÁ EL ENCARGADO DE PINTAR EL COMPONENTE APP QUE CONTENDRÁ TODA LA APLICACIÓN
import React from 'react';
import ReactDOM from 'react-dom';
import App from './react/App';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux-store/index';
import "../src/assets/styles/output.css";
import "../src/assets/css.css";
// import { PopUp } from './react/componentes/reusable/popup/PopUp';

// import { IncomingMessageNotification } from './react/componentes/reusable/mensajes/incomingMessageNotification';

// ReactDOM.render(<App/>, document.getElementById('root'));



const root = createRoot(document.getElementById('root'));

root.render(
<Provider store={store}>
   
    <App/>
   

 
   {/* <IncomingMessageNotification/> */}
</Provider>

)


