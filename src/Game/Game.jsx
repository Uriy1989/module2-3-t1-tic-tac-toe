import { useState, useEffect } from 'react';
import { GameLayout } from './GameLayout.jsx';

export const Game = () => {
	const [render, setRender] = useState(false);

	useEffect(() => {
		setRender((prev) => !prev);
	}, []);

	const handleRender = () => {
		setRender((prev) => !prev);
	};

	return <GameLayout handleRender={handleRender} />;
};
