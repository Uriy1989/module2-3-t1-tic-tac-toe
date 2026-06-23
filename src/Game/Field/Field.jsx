import { FieldLayout } from './FieldLayout.jsx';
import { useSelector, useDispatch } from 'react-redux';

import {
	selectField,
	selectCurrentPlayer,
	selectIsGameEnded,
} from '../selectors';

import {
	setIsGameEnded,
	setFiled,
	setIsDraw,
	SET_CURRENT_PLAYER,
} from '../actions';

export const Field = () => {
	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);

	const dispatch = useDispatch();

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
			dispatch(setIsGameEnded(true));
			return true;
		}
		return false;
	};

	const checkIsDraw = (newField) => {
		const check = newField.every((field) => field !== '');
		if (check) {
			dispatch(setIsGameEnded(check));
		}

		return check;
	};

	const updateField = (index) => {
		const newField = [...field];
		newField[index] = currentPlayer;

		dispatch(setFiled(newField));
		return newField;
	};

	const handlerClick = (index) => {
		if (isGameEnded || field[index] !== '') return;

		const newField = updateField(index);
		const winPlayer = checkWinPlayer(newField);

		if (!winPlayer) {
			dispatch(SET_CURRENT_PLAYER);
			dispatch(setIsDraw(checkIsDraw(newField)));
		}
	};
	return <FieldLayout handlerClick={handlerClick} />;
};
