import {
	useState,
	useEffect,
	createContext,
	ReactNode,
	useReducer,
	useContext,
} from 'react';

interface IContext {
	state: IInitialState;
}

interface IProps {
	children: ReactNode;
}

interface IInitialState {
	budgets: { name: string; ammount: number }[];
}

const initialState: IInitialState = {
	budgets: [],
};

type Actions = { type: string; payload?: string };
const context = createContext<IContext>({ state: { budgets: [] } });

const reducer = (state: IInitialState, action: Actions) => {
	return state;
};

export default function AppContext({ children }: IProps): JSX.Element {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <context.Provider value={{ state }}>{children}</context.Provider>;
}

export const useAppContext = (): IContext => {
	const data = useContext(context);
	return data;
};
