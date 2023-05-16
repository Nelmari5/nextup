// Declare Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import Routes from './Routes';

//Render Component
const base = document.getElementById('app')
if(!!base){
  ReactDOM.render(<Routes />, base)
}
