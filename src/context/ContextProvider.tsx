import React, { createContext, useContext, useReducer } from 'react';
import { formReducer, minuteReducer } from './Reducers';
import { LocationType } from '../component/Input';

export interface Props {
  children: React.ReactNode;
}

export type FormType = {
  agenda?: string | '';
  date?: Date | '';
  location?: string | '';
  attendees?: string[];
  summary?: string;
  decisionsMade?: string[];
  actions?: string[];
};

//--Application State type definition--//
export type State = {
  minute: {
    showMinute: boolean;
  };
  form: FormType;
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
  form: {
    agenda: '',
    date: '',
    location: '',
    attendees: [],
    summary: '',
    decisionsMade: [],
    actions: [],
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
  form: {
    inputs: FormType;
    getUserInputs : () => FormType;
    updateInput: (name: keyof FormType, value: any) => void;
    updateSelect: (name: keyof FormType, value: any) => void;
  };
};


export const StateContext = createContext<StateContextValue | undefined>(undefined);

export const StateProvider: React.FC<Props> = ({ children }) => {
  //--------------------------------Minute State + Dispatch----------------------------------------//
  const [minuteState, dispatchMinute] = useReducer(minuteReducer, initialState.minute); 
  const generateMinute = (): void => dispatchMinute({ type: 'GENERATE_MINUTE' });
  const createNewMinute = (): void => dispatchMinute({type: 'CREATE_NEW_MINUTE'});
  //-----------------------------------------Ends--------------------------------------------------//

  //--------------------------------Form State + Dispatch------------------------------------------//
  const [formState, dispatchForm] = useReducer(formReducer, initialState.form);
  const getUserInputs = (): FormType => {
    dispatchForm({ type: 'GET_USER_INPUTS' });
    return formState;
  };
  const updateInput = (name: keyof FormType, value: string) => {
    dispatchForm({ type: 'UPDATE_FORM_INPUT', payload: { name, value }});
    return { ...formState, [name]: value };
  };
  const updateSelect = (name: keyof FormType, value: string) => {
    dispatchForm({ type: 'UPDATE_FORM_SELECT', payload: {name, value}})
  }
  //-----------------------------------------Ends--------------------------------------------------//
  
  return (
    <StateContext.Provider
      value={{
        //--Minute State--//
        minute: {
          showMinute: minuteState.showMinute, generateMinute, createNewMinute
        },
        //--App Information--//
        appInfo: {
          appName: initialState.appInfo.appName,
          owner: initialState.appInfo.owner,
        }, 
        //--Form Information--//
        form: {
          inputs: {
            agenda: formState.agenda,
            date: formState.date,
            location: formState.location,
            attendees: formState.attendees,
            summary: formState.summary,
            decisionsMade: formState.decisionsMade,
            actions: formState.actions,
          },
          getUserInputs,
          updateInput,
          updateSelect,
        }
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
