import React, { useState } from 'react';
import { useStateContext } from '../context/ContextProvider';
import { Input, Button } from './';

const Form: React.FC = (): JSX.Element => {
  const { minute } = useStateContext();
  const { generateMinute } = minute;

  const [date, setDate] = useState(new Date());
 
  return (
    <div className="sm:p-10 p-5 border m-5 rounded-[5px] flex flex-col justify-between ">
      <div className='grid gap-10'>
        <div className='grid sm:grid-cols-3 grid-cols-1 gap-4 items-end'>
          <Input label={"Date"} type={'date-picker'} dateValue={date} 
            onChangeDate={(newDate) => setDate(newDate)}/>
          <Input label={"Location"} type="select" />
          <Input label={"Attendees"} type="tag" />
        </div>

        <div className=''>
          <Input label={"Agenda"}/>
        </div>
        <div className=''>
          <Input label="Summary" type={'text-area'} sx={`h-20`} />
        </div>

        <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
          <Input label={"Decisions Made"} />
          <Input label={"Next Action"} />
        </div>
      </div>
      <Button title={"Generate"} 
          onClick={generateMinute}
        />
    </div>
  );
};

export default Form;

