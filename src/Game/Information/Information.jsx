import { InformationLayout } from './InformationLayout.jsx';

import { store } from '../../store.js';

export const Information = () => {
	const { isGameEnded, isDraw, currentPlayer } = store.getState();

	const informationText = isDraw
		? 'Ничья'
		: isGameEnded
			? `Победа: ${currentPlayer}`
			: `Ходит: ${currentPlayer}`;

	return <InformationLayout informationText={informationText} />;
};
