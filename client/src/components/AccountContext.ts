import { createContext, useContext } from 'react';

export const AccountContext = createContext({account: "", setAccount: (value : string) => {}});
