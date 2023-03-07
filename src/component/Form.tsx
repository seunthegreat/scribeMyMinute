import React, { useState, useEffect, ChangeEvent } from 'react';
import { useStateContext } from '../context/ContextProvider';
import { Input, Button } from './';
import { FormType } from '../context/ContextProvider';
import { LocationType } from './Input';

const Form: React.FC = (): JSX.Element => {
  const { minute, form } = useStateContext();
  const { generateMinute } = minute;
  const { getUserInputs, updateInput, updateSelect} = form;

  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState<LocationType | null>(null);

  useEffect(() => {
   // console.log(getUserInputs)
  },[])

  const handleInputChange = (e:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    updateInput(name as keyof FormType, value);
  };

  const handleSelectLocation = (location: LocationType | null) => {
    setLocation(location);
    updateSelect("location", location?.label)
  }
  //console.log(getUserInputs());
 
  return (
    <div className="sm:p-10 p-5 border m-5 rounded-[5px] flex flex-col justify-between ">
      <div className='grid gap-10'>

      <div className=''>
          <Input label={"Agenda"} name="agenda" onChange={handleInputChange}/>
        </div>

      <div className='grid sm:grid-cols-3 grid-cols-1 gap-10 sm:gap-4 items-end'>
          <Input label={"Date"} type={'date-picker'} dateValue={date} 
            onChangeDate={(newDate) => setDate(newDate)}/>
          <Input label={"Location"} type="select" name='location' value={location} onChangeSelect={handleSelectLocation} />
          <Input label={"Attendees"} type="tag" />
        </div>

        <div className=''>
          <Input label="Summary" type={'text-area'} sx={`h-20`} name="summary" onChange={handleInputChange}/>
        </div>

        <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
          <Input label={`Decision(s) Made`} type="tag" />
          <Input label={"Add Action"} type="tag" />
        </div>
      </div>
      <Button title={"Generate"}  onClick={() => console.log(getUserInputs())}/>
    </div>
  );
};

export default Form;

