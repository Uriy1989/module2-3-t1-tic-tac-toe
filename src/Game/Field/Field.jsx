import { FieldLayout } from './FieldLayout.jsx';
import { store } from '../../store.js';

//field,
export const Field = ({
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	setIsDraw,
}) => {
	//setField
	//setCurrentPlayer
	//setIsGameEnded
	//setIsDraw

	// store.dispatch({ type: 'SET_FIELD', payload: userDataFromServer });
	// store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: userDataFromServer });
	// store.dispatch({ type: 'SET_IS_GAME_ENDED', payload: userDataFromServer });
	// store.dispatch({ type: 'SET_IS_DRAW', payload: userDataFromServer });

	const { field } = store.getState();
	console.log('field ===', field);

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
			setIsGameEnded(true);
			return true;
		}
		return false;
	};

	const checkIsDraw = (newField) => {
		const check = newField.every((field) => field !== '');
		if (check) {
			setIsGameEnded(check);
		}

		return check;
	};

	const updateField = (index) => {
		const newField = [...field];
		newField[index] = currentPlayer;

		store.dispatch({ type: 'SET_FIELD', payload: newField });

		//setField(newField);//
		return newField;
	};

	const handlerClick = (index) => {
		if (isGameEnded || field[index] !== '') return;

		const newField = updateField(index);
		const winPlayer = checkWinPlayer(newField);

		if (!winPlayer) {
			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
			setIsDraw(checkIsDraw(newField));
		}
	};

	return <FieldLayout field={field} handlerClick={handlerClick} />;
};
