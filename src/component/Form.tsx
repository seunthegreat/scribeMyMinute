import React, { useState } from 'react';
import { useStateContext } from '../context/ContextProvider';
import { Input, Button } from './';


const Form: React.FC = (): JSX.Element => {
  const { state, dispatch } = useStateContext();
  const { showMinute  } = state;
  return (
    <>
      {!showMinute && 
        <div className="p-10 border m-5 rounded-[5px] ">
          <div className='flex flex-col justify-between'>
            <div className='grid grid-cols-2 gap-4'>
              <Input label={"Meeting agenda"} />
              <Input label={"Attendees"} />
            </div>

            <div className='my-2'>
              <Input label="Discussion notes" type={'text-area'} sx={`h-40`} />
            </div>

            <div className=''>
              <Input label="Comments" type={'text-area'} sx="h-20" />
            </div>

            <Button title={"Generate"} onClick={() => dispatch({type: 'SHOW_MINUTE'})}/>
          </div>
        </div>
       }
    </>
  );
};

export default Form;

