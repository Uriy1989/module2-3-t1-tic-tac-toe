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
