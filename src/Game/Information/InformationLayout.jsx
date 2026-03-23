import styles from './styles.module.css';

export const InformationLayout = ({ informationText }) => {
	return (
		<>
			<div className={styles.panelInformation}>{informationText}</div>
		</>
	);
};
