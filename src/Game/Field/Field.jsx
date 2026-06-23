import { FieldLayout } from './FieldLayout.jsx';
//import { store } from '../../store.js';
import { useSelector, useDispatch } from 'react-redux';

import {
	selectField,
	selectCurrentPlayer,
	selectIsGameEnded,
} from '../selectors'; // selectIsDraw,

export const Field = () => {
	//{ handleRender }
	/*const { field, currentPlayer, isGameEnded } = store.getState();*/

	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);

	const dispatch = useDispatch();

	console.log('field = ', field);

	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	];

	const checkWin = (array, patterns, symbol) => {
		return patterns.some((pattern) =>
			pattern.every((index) => array[index] === symbol),
		);
	};

	const checkWinPlayer = (newField) => {
		if (
			checkWin(newField, WIN_PATTERNS, 'X') ||
			checkWin(newField, WIN_PATTERNS, 'O')
		) {
			dispatch({ type: 'SET_IS_GAME_ENDED', payload: true });
			return true;
		}
		return false;
	};

	const checkIsDraw = (newField) => {
		const check = newField.every((field) => field !== '');
		if (check) {
			dispatch({ type: 'SET_IS_GAME_ENDED', payload: check });
		}

		return check;
	};

	const updateField = (index) => {
		const newField = [...field];
		newField[index] = currentPlayer;

		dispatch({ type: 'SET_FIELD', payload: newField });
		return newField;
	};

	const handlerClick = (index) => {
		if (isGameEnded || field[index] !== '') return;

		const newField = updateField(index);
		const winPlayer = checkWinPlayer(newField);

		if (!winPlayer) {
			dispatch({ type: 'SET_CURRENT_PLAYER' });
			dispatch({
				type: 'SET_IS_DRAW',
				payload: checkIsDraw(newField),
			});
		}
		//handleRender();//после импортировать action
	};

	return <FieldLayout handlerClick={handlerClick} />;
};
