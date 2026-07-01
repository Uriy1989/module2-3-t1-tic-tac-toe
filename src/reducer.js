import { initialState } from './initialState';

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_FIELD': {
			const index = state.currentIndex;
			if (state.field[index] !== '') {
				return state;
			}
			const newField = [...state.field];
			newField[index] = state.currentPlayer;
			return {
				...state,
				field: newField,
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
		case 'SET_CURRENT_INDEX': {
			return {
				...state,
				currentIndex: payload,
			};
		}

		default:
			return state;
	}
};
