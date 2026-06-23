import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { selectField } from '../selectors';
export const FieldLayout = ({ handlerClick }) => {
	const field = useSelector(selectField);
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
