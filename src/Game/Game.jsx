import { useState, useEffect } from 'react';
import { GameLayout } from './GameLayout.jsx';
import { store } from '../store.js';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);

	const [render, setRender] = useState(false);

	useEffect(() => {
		setRender((prev) => !prev);
	}, []);
	//const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	//переделаем 4 первых хука

	//setField
	//setCurrentPlayer
	//setIsGameEnded
	//setIsDraw

	const { field } = store.getState();

	const handleRestart = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);

		store.dispatch({
			type: 'RESTART_GAME',
		});

		// store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: userDataFromServer });
		// store.dispatch({ type: 'SET_IS_GAME_ENDED', payload: userDataFromServer });
		// store.dispatch({ type: 'SET_IS_DRAW', payload: userDataFromServer });

		//setField(['', '', '', '', '', '', '', '', '']);
	};

	const handleSetCurrentPlayer = (value) => {
		setCurrentPlayer(value);
	};

	const handleSetIsGameEnded = (value) => {
		setIsGameEnded(value);
	};

	const handleSetIsDraw = (value) => {
		setIsDraw(value);
	};

	const handleSetField = (value) => {
		setField(value);
	};

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			setCurrentPlayer={handleSetCurrentPlayer} //меняем имя в пропсах
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded} //меняем имя в пропсах
			isDraw={isDraw}
			setIsDraw={handleSetIsDraw} //меняем имя в пропсах
			field={field}
			handleRestart={handleRestart}
		/>
	);
};
//setField={setField} //меняем имя в пропсах
