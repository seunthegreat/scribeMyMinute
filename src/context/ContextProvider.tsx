import React, { createContext, useContext, useReducer } from 'react';
import { minuteReducer } from './Reducers';

export interface Props {
  children: React.ReactNode;
}

//--Application State type definition--//
export type State = {
  minute: {
    showMinute: boolean;
  };
  appInfo: {
    appName: string;
    owner: string;
  };
};

//--Initial State of application--//
export const initialState: State = {
  minute: {
    showMinute: false,
  },
  appInfo: {
    appName: 'Minute Scribe',
    owner: 'Seun Abilawon',
  },
};

export type StateContextValue = {
  minute: {
    showMinute: boolean;
    generateMinute: () => void;
    createNewMinute: () => void;
  };
  appInfo: {
    appName: string;
    owner: string;
  };
};


export const StateContext = createContext<StateContextValue | undefined>(undefined);

export const StateProvider: React.FC<Props> = ({ children }) => {
  const [minuteState, dispatchMinute] = useReducer(minuteReducer, initialState.minute);

  //-----------------------------------Minute dispatch-----------------------------------------------//

  const generateMinute = (): void => dispatchMinute({ type: 'GENERATE_MINUTE' });
  const createNewMinute = (): void => dispatchMinute({type: 'CREATE_NEW_MINUTE'});

  //-----------------------------------------Ends----------------------------------------------------//

  return (
    <StateContext.Provider
      value={{
        //--Minute State--//
        minute: {
          showMinute: minuteState.showMinute, generateMinute, createNewMinute
        },
        //--App Information--//
        appInfo: initialState.appInfo, // Use the initialState value instead
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export function useStateContext(): StateContextValue {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error('useStateContext must be used within a StateProvider');
  }

  return context;
}
