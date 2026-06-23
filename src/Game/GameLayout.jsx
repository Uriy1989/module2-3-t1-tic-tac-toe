import { Information } from './Information/Information';
import { Field } from './Field/Field';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { RESTART_GAME } from './actions';

export const GameLayout = () => {
	const dispatch = useDispatch();

	const restartGame = () => {
		dispatch(RESTART_GAME);
	};
	return (
		<>
			<Information />
			<Field />
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
