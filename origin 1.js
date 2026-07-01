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



import { initialState } from './initialState';

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_FIELD': {
			return {
				...state,
				field: payload,
			};
		}
		case 'SET_CURRENT_PLAYER': {
			return {
				...state,
				currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
			};
		}
		case 'SET_IS_GAME_ENDED': {
			return {
				...state,
				isGameEnded: payload,
			};
		}
		case 'SET_IS_DRAW': {
			return {
				...state,
				isDraw: payload,
			};
		}
		case 'RESTART_GAME': {
			return initialState;
		}

		default:
			return state;
	}
};
