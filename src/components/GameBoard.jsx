import React, {useState, useEffect} from 'react'
import ScoreBoard from './ScoreBoard'
import ImageGrid from './ImageGrid'
import "./GameBoard.scss"

const GameBoard = (props) => { 
	const [ score,setScore ] = useState(0) ;
	const [ highScore,setHighScore ] = useState(0) ;

	const setScores= (newScore) => 
	{
		if(newScore > highScore)
			setHighScore(newScore);
		setScore(newScore)
	}

	const addScore=() => {
		setScores(score+1)
	}




	return (
		<div className="GameBoard">
		<ScoreBoard score={score} highScore={highScore}/>

		<ImageGrid  setScores={setScores} addScore={addScore} score={score}/> 


		</div>

	)
} 

export default GameBoard
