import { InformationLayout } from './InformationLayout.jsx';

export const Information = ({ isGameEnded, isDraw, currentPlayer }) => {
	const informationText = isDraw
		? 'Ничья'
		: isGameEnded
			? `Победа: ${currentPlayer}`
			: `Ходит: ${currentPlayer}`;

	return <InformationLayout informationText={informationText} />;
};
