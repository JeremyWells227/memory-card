import React,{useState,useEffect}  from 'react';
import "./ScoreBoard.scss"
const ScoreBoard = (props) => 
{
	return (
		<div className="ScoreBoard">
		<p className="score">Current Score: {props.score}</p>
		<p className="highScore score">Current High Score: {props.highScore}</p>
		<p className="infoText">Try to click on each meme template once!  They shuffle after each click.  All images fetched from the free API <a href="https://api.imgflip.com/get_memes">Imgflip</a></p> 
		</div>
	)
}

export default ScoreBoard;


