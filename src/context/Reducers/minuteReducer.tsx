import { Reducer } from 'react';

export interface MinuteStateType {
  showMinute: boolean;
  loading: boolean;
  generatedResult: any; // add a property to store the response data
}

interface MinuteAction {
  type: 'GENERATE_MINUTE' | 'CREATE_NEW_MINUTE' | 'GENERATE_MINUTE_SUCCESS';
  payload?: any;
}

const minuteReducer: Reducer<MinuteStateType, MinuteAction> = (state, action) => {

  switch (action.type) {
    case 'GENERATE_MINUTE':
      return { ...state, loading: true };
    case 'GENERATE_MINUTE_SUCCESS':
      const generatedResult = action.payload.form;
      return { ...state, loading: false, showMinute: true, generatedResult: generatedResult };
    case 'CREATE_NEW_MINUTE':
      return { ...state, showMinute: false };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default minuteReducer;
