import { Reducer } from 'react';
import { LocationType } from '../../component/Input';

export interface formState {
  agenda?: string;
  date?: Date | '';
  location?: string;
  attendees?: string[];
  summary?: string;
  decisionsMade?: string[];
  actions?: string[];
}

interface formAction {
  payload?: any;
  type: 'GET_USER_INPUTS' | 'UPDATE_FORM_INPUT' | 'UPDATE_FORM_TAG'
    | 'UPDATE_FORM_SELECT';
}

const formReducer: Reducer<formState, formAction> = (state, action) => {
  switch (action.type) {
    case 'GET_USER_INPUTS':
      return state;
    case 'UPDATE_FORM_INPUT':
      //console.log("name: ", action.payload.name, "value: ", action.payload.value);
      return { ...state, [action.payload.name]: action.payload.value };
    case 'UPDATE_FORM_TAG': 
      console.log(action.payload.value)
      return { ...state, [action.payload.name]: action.payload.value};
    case 'UPDATE_FORM_SELECT': 
      return { ...state, [action.payload.name]: action.payload.value}
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default formReducer;
