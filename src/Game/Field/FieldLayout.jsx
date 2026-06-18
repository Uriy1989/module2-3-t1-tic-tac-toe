import styles from './styles.module.css';

import { store } from '../../store';

export const FieldLayout = ({ handlerClick }) => {
	//({ field, handlerClick }) => {
	const { field } = store.getState();
	console.log('field ===', field);

	return (
		<>
			<div className={styles.ButtonsContainer}>
				{field.map((button, index) => (
					<button
						className={styles.button}
						key={index}
						onClick={() => handlerClick(index)}
					>
						{button}
					</button>
				))}
			</div>
		</>
	);
};
