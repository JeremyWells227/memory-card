import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import GameBoard from './components/GameBoard';

import "./index.scss";



ReactDOM.render(
  <React.StrictMode>
	<div>	
	<Header />
	</div>
	<GameBoard /> 
  </React.StrictMode>,
  document.getElementById('root')
);
