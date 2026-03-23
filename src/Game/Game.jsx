import { useState } from 'react';
import { GameLayout } from './GameLayout.jsx';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const handleRestart = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
	};

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			isDraw={isDraw}
			setIsDraw={setIsDraw}
			field={field}
			setField={setField}
			handleRestart={handleRestart}
		/>
	);
};

/*
Подготовьте состояния. В корневом компоненте Game создаем следующие состояния:

currentPlayer — кто ходит в данный момент, значениями может быть 'X' или '0'. По умолчанию — 'X';
isGameEnded — была ли завершена игра. По умолчанию false;
isDraw — была ли ничья. По умолчанию false;
field — массив клеток игрового поля, состоящий из 9 пустых строк (3x3). Будет хранится массив вида:

*/
