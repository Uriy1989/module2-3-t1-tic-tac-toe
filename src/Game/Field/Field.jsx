import { FieldLayout } from './FieldLayout.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
	selectField,
	selectCurrentPlayer,
	selectIsGameEnded,
} from '../selectors';

import {
	setIsGameEnded,
	setIsDraw,
	SET_CURRENT_PLAYER,
	setCurrentIndex,
	SET_FIELD,
} from '../actions';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const checkWin = (array, patterns, symbol) => {
	return patterns.some((pattern) =>
		pattern.every((index) => array[index] === symbol),
	);
};

const checkWinPlayer = (field) =>
	checkWin(field, WIN_PATTERNS, 'X') || checkWin(field, WIN_PATTERNS, 'O');

const checkIsDraw = (field) => field.every((cell) => cell !== '');

export const Field = () => {
	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);

	const dispatch = useDispatch();

	const handlerClick = (index) => {
		if (isGameEnded || field[index] !== '') return;

		dispatch(setCurrentIndex(index));
		dispatch(SET_FIELD);
	};

	useEffect(() => {
		if (isGameEnded) return;

		const winner = checkWinPlayer(field);
		if (winner) {
			dispatch(setIsGameEnded(true));
			return;
		}

		const draw = checkIsDraw(field);
		if (draw) {
			dispatch(setIsDraw(true));
			dispatch(setIsGameEnded(true));
			return;
		}

		dispatch(SET_CURRENT_PLAYER);
	}, [
		field,
		isGameEnded,
		dispatch,
		setIsGameEnded,
		setIsDraw,
		SET_CURRENT_PLAYER,
	]);

	return <FieldLayout handlerClick={handlerClick} />;
};
