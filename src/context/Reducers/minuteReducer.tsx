import { Reducer } from 'react';

const mockResult: object = {
  "response": {
      "title": "Decide on how much to invest in Forex",
      "summary": "The meeting was held on 22/03/2022 via Zoom. In attendance were Omolola and Seun. The purpose of the meeting was to discuss accountability measures and to create a commitment contract. Omolola, Seun with decisions made as Lola agrees to the challenge, The Sum of 200,000 naira will be invested in the trading business, The sum of 20,000 naira will be paid to Lola as a caution fee, The commitment contract will be made available before month end",
      "purpose": "To come to a decision on how much to invest in Forex.",
      "keyTopics": [
          {
              "id": "y18w4l9av",
              "topic": "-Accountability partner"
          },
          {
              "id": "xlc6km41d",
              "topic": "-Commitment contract"
          },
          {
              "id": "odoi9pl44",
              "topic": "-Enforcing accountability"
          },
          {
              "id": "phnd5a01u",
              "topic": "-Violating terms"
          }
      ],
      "objective": "The objective of this meeting is to establish an accountability partnership between Lola and the speaker, in which a commitment contract will be created to enforce accountability measures",
      "keyResults": [
          {
              "id": "78bjceokd",
              "result": "-Lola and the speaker will establish an accountability partnership"
          },
          {
              "id": "qww9xqpd8",
              "result": "-A commitment contract will be created to enforce accountability measures"
          }
      ]
  }
};

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
      const requestBody = action.payload.form;
      // Api call
      const generatedResult = async (): Promise<any> => {
        try {
          // const response = await fetch('https://minute-scribe-be.onrender.com/generate-minute', {
          //   method: 'POST',
          //   body: JSON.stringify(requestBody),
          //   headers: {
          //     'Content-Type': 'application/json'
          //   }
          // });
          // const responseData = await response.json();   
           let responseData = mockResult;
          return responseData
        } catch (error) {
          console.error(error);
          return { ...state, loading: false };
        }
      };
      
      return { ...state, showMinute: true, generatedResult: mockResult, loading: false };
    case 'CREATE_NEW_MINUTE':
      return { ...state, showMinute: false };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default minuteReducer;
