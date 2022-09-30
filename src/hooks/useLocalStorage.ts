import { useState, useEffect } from 'react';

interface IProps {
	key: string;
	defaultValue: any;
}

export default function useLocalStorage({ key, defaultValue }: IProps) {
	const [value, setValue] = useState(() => {
		const jsonValue = localStorage.getItem(key);
		if (jsonValue) return JSON.parse(jsonValue);
		if (defaultValue instanceof Function) return defaultValue();
		return defaultValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}
