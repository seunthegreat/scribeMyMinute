import React, { useState, useEffect, ChangeEvent } from 'react';
import { useStateContext } from '../context/ContextProvider';
import { Input, Button } from './';
import { FormType } from '../context/ContextProvider';
import { LocationType } from './Input';

const Form: React.FC = (): JSX.Element => {
  const { minute, form } = useStateContext();
  const { attendees, actions, decisionsMade } = form.inputs;
  const { setLoading, generateMinuteSuccess } = minute;
  const { getUserInputs, updateInput, updateSelect, updateTag} = form;

  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState<string | undefined>('');

  useEffect(() => {
   // console.log(getUserInputs)
  },[])

  const handleInputChange = (e:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    updateInput(name as keyof FormType, value);
  };

  const handleSelectLocation = (location: LocationType | null) => {
   // setLocation(location?.label);
    updateSelect("location", location?.label)
  }
  //console.log(getUserInputs());

  const handleGenerate = async () => {

    const mock: object = {
      agenda: "Decide on how much to invest in Forex",
      date: "22/03/2022",
      location: "Zoom",
      attendees: [
          {"id": 1, "name": "Omolola"},
          {"id": 1, "name": "Seun"}
      ],
       summary: "Lola agreed to become my accountability partner, and a commitment contract will be created. This contract will enforce accountability measures, and if I fail violate my terms, she is entitled to earn from my stake.",
       decisionMade: [
           {"id": 1, "name": "Lola agrees to the challenge"},
           {"id": 2, "name": "The Sum of 200,000 naira will be invested in the trading business"},
           {"id": 3, "name": "The sum of 20,000 naira will be paid to Lola as a caution fee"},
           {"id": 4, "name": "The commitment contract will be made available before month end"}
       ]
    };
    //generateMinute(getUserInputs())
    //generateMinute(mock)
    setLoading();
    await generateMinuteSuccess(mock);
  }
 
  return (
    <div className="sm:p-10 p-5 border m-5 rounded-[5px] flex flex-col justify-between ">
      <div className='grid gap-10'>

      <div className='grid sm:grid-cols-3 grid-cols-1'>
          <div className='col-span-2'>
            <Input label={"Agenda"} name="agenda" onChange={handleInputChange}/>
          </div>
          <Input label={"Date"} type={'date-picker'} dateValue={date} onChangeDate={(newDate) => setDate(newDate)}/>
        </div>

      <div className='grid sm:grid-cols-3 grid-cols-1 gap-10 sm:gap-4 items-end'>
          
          <Input label={"Location"} type="select" name='location' value={location} onChangeSelect={handleSelectLocation} />
          <div className='col-span-2'>
            <Input label={"Attendees"} type="tag" name="attendees"  position="in-line" tags={attendees} />
          </div>
        </div>

        <div className=''>
          <Input label="Summary" type={'text-area'} sx={`h-20`} name="summary" onChange={handleInputChange}/>
        </div>

        <div className=''>
          <Input label={`Decision(s) Made`} type="tag" position="bottom" name="decisionsMade" tags={decisionsMade} />
        </div>
      </div>
      <Button title={"Generate"}  onClick={handleGenerate}/>
    </div>
  );
};

export default Form;

