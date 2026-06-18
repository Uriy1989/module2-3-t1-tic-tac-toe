import styles from './styles.module.css';

import { store } from '../../store';

export const FieldLayout = ({ handlerClick }) => {
	const { field } = store.getState();

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
