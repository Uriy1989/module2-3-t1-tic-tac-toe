import { InformationLayout } from './InformationLayout.jsx';
import { useSelector } from 'react-redux';

import {
	selectCurrentPlayer,
	selectIsGameEnded,
	selectIsDraw,
} from '../selectors';

export const Information = () => {
	const isGameEnded = useSelector(selectIsGameEnded);
	const isDraw = useSelector(selectIsDraw);
	const currentPlayer = useSelector(selectCurrentPlayer);

	const informationText = isDraw
		? 'Ничья'
		: isGameEnded
			? `Победа: ${currentPlayer}`
			: `Ходит: ${currentPlayer}`;

	return <InformationLayout informationText={informationText} />;
};
