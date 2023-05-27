// ESTE SCRIPT SERÁ EL ENCARGADO DE PINTAR EL COMPONENTE APP QUE CONTENDRÁ TODA LA APLICACIÓN
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/react/App';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './src/redux-store/index';
// ReactDOM.render(<App/>, document.getElementById('root'));

const root = createRoot(document.getElementById('root'));

root.render(
<Provider store={store}>
    <App/>
</Provider>

)