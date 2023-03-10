import React, { createContext, useContext, useReducer } from 'react';
import { formReducer, minuteReducer } from './Reducers';
import { LocationType } from '../component/Input';
import { Tag } from '../component/Input';
import { MinuteStateType } from './Reducers/minuteReducer';

export interface Props {
  children: React.ReactNode;
}

export interface tagInput {
  id: number;
  name: string;
}

export type FormType = {
  agenda?: string | '';
  date?: Date | any;
  location?: string | '';
  attendees?: any[];
  summary?: string;
  decisionsMade?: any[];
  actions?: any[];
};

export type GeneratedMinute =  {
  success: boolean,
  data: {
    id: string,
    title: string,
    minute: string,
    objective: string,
    keyResults: {
      id: string,
      result: string,
    }[]
  }
};

//--Application State type definition--//
export type State = {
  minute: MinuteStateType,
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
    loading: false,
    generatedResult: []
  },
  form: {
    agenda: '',
    date: new Date,
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
    loading: boolean;
    setLoading: () => void;
    generateMinuteSuccess: (form: FormType) => void;
    generatedResult: GeneratedMinute | [];
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
    updateTag: (name: keyof FormType | undefined, value: tagInput[]) => void;
    resetForm: () => void;
  };
};


export const StateContext = createContext<StateContextValue | undefined>(undefined);

export const StateProvider: React.FC<Props> = ({ children }) => {
  //--------------------------------Minute State + Dispatch----------------------------------------//
  const [minuteState, dispatchMinute] = useReducer(minuteReducer, initialState.minute); 
  const setLoading = (): void  => dispatchMinute({ type: 'GENERATE_MINUTE'});
  const generateMinuteSuccess = (form: FormType) => {
    dispatchMinute({ type: 'GENERATE_MINUTE_SUCCESS', payload: {form} });
    return minuteState
  };
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
  };
  const updateTag = (name: keyof FormType | undefined, value: tagInput[]) => {
    dispatchForm({ type: 'UPDATE_FORM_TAG', payload: {name, value}})
  };
  const resetForm = (): void => {
    dispatchForm({type: 'RESET_FORM'})
  }
  //-----------------------------------------Ends--------------------------------------------------//
  
  return (
    <StateContext.Provider
      value={{
        //--Minute State--//
        minute: {
          showMinute: minuteState.showMinute, generateMinuteSuccess, 
          createNewMinute, loading: minuteState.loading, setLoading, generatedResult: minuteState.generatedResult
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
          updateTag,
          resetForm,
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

