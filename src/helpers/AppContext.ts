import {createContext} from 'react';

export type AppContextType = {
    nav: string;
    setNav: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextType>({
    nav: '/home',
    setNav: () => {}
})