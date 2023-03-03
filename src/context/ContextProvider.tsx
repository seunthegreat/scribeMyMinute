import React, { createContext, useContext, useState } from 'react';

interface Props { children: React.ReactNode; }

type State = {
  showMinute: boolean;
};
type Action = { type: 'SHOW_MINUTE'} | {type : 'HIDE_MINUTE'};
type Dispatch = (action: Action) => void;
type StateContextValue = {
  state: State;
  dispatch: Dispatch;
};

const StateContext = createContext<StateContextValue | undefined >(undefined);

export const StateProvider: React.FC<Props> = ({ children }) => {
  const [state, setState] = useState<State>({ showMinute: false})

  const dispatch = (action: Action) => {
    switch (action.type) {
        case 'SHOW_MINUTE':
          setState({ ...state, showMinute: true });
          break;
        case 'HIDE_MINUTE':
          setState({ ...state, showMinute: false });
          break;
        default:
          throw new Error(`Unhandled action type: ${action}`);
      }
  }

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

export function useStateContext(): StateContextValue {
  const context = useContext(StateContext);
  
  if (!context) {
    throw new Error('useStateContext must be used within a StateProvider');
  }
  
  return context;
}