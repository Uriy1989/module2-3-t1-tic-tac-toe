import { Information } from './Information/Information';
import { Field } from './Field/Field';
import styles from './styles.module.css';

import { store } from '../store';

export const GameLayout = ({ handleRender }) => {
	const restartGame = () => {
		store.dispatch({
			type: 'RESTART_GAME',
		});
		handleRender();
	};

	return (
		<>
			<Information handleRender={handleRender} />
			<Field handleRender={handleRender} />
			<button
				key="startOver"
				className={styles.gameButton}
				onClick={restartGame}
			>
				Начать заново
			</button>
		</>
	);
};
