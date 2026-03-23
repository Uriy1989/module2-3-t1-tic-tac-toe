import { Information } from './Information/Information';
import { Field } from './Field/Field';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

export const GameLayout = ({
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
	field,
	setField,
	handleRestart,
}) => {
	return (
		<>
			<Information
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				currentPlayer={currentPlayer}
			/>
			<Field
				field={field}
				setField={setField}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
			/>
			<button
				key="startOver"
				className={styles.gameButton}
				onClick={() => handleRestart()}
			>
				Начать заново
			</button>
		</>
	);
};

GameLayout.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	setCurrentPlayer: PropTypes.func.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	setIsGameEnded: PropTypes.func.isRequired,
	isDraw: PropTypes.bool.isRequired,
	setIsDraw: PropTypes.func.isRequired,
	field: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
	setField: PropTypes.func.isRequired,
	handleRestart: PropTypes.func.isRequired,
};
//: PropTypes.func,
