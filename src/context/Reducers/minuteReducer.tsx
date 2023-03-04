import { Reducer } from 'react';

interface MinuteState {
  showMinute: boolean;
}

interface MinuteAction {
  type: 'SHOW_MINUTE' | 'HIDE_MINUTE';
}

const minuteReducer: Reducer<MinuteState, MinuteAction> = (state, action) => {
  switch (action.type) {
    case 'SHOW_MINUTE':
      return { ...state, showMinute: true };
    case 'HIDE_MINUTE':
      return { ...state, showMinute: false };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default minuteReducer;
