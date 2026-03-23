import styles from './styles.module.css';

export const FieldLayout = ({ field, handlerClick }) => {
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
