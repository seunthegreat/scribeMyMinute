import { Reducer } from 'react';

interface MinuteState {
  showMinute: boolean;
}

interface MinuteAction {
  type: 'GENERATE_MINUTE' | 'CREATE_NEW_MINUTE';
}

const minuteReducer: Reducer<MinuteState, MinuteAction> = (state, action) => {
  switch (action.type) {
    case 'GENERATE_MINUTE':
      return { ...state, showMinute: true };
    case 'CREATE_NEW_MINUTE':
      return { ...state, showMinute: false };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default minuteReducer;
