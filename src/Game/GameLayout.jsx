import { Information } from './Information/Information';
import { Field } from './Field/Field';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';

//import { store } from '../store';

export const GameLayout = () => {
	const dispatch = useDispatch();

	//{ handleRender }
	const restartGame = () => {
		//перенести в onClick или используем useSelect
		dispatch({
			type: 'RESTART_GAME',
		});
		//handleRender();
	};
	/*			<Information />//handleRender={handleRender} 
			<Field handleRender={handleRender} /> */
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
