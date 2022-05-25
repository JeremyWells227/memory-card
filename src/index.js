import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import GameBoard from './components/GameBoard';

import { Helmet } from 'react-helmet';
import "./index.scss";



ReactDOM.render(
  <React.StrictMode>
	<Helmet>
	<title> Meme Memory Game </title> 
	<meta charset="utf-8"/> 
	<link rel="preconnect" href="https://fonts.googleapis.com"/>
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
	<link href="https://fonts.googleapis.com/css2?family=Dosis&display=swap" rel="stylesheet"/>
	</Helmet>
	<div>	
	<Header />
	</div>
	<GameBoard /> 
  </React.StrictMode>,
  document.getElementById('root')
);
