import React, { useState, useEffect, ChangeEvent } from 'react';
import { useStateContext } from '../context/ContextProvider';
import { Input, Button } from './';
import { FormType } from '../context/ContextProvider';
import { LocationType } from './Input';

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

    const mockResponse: object = {
      "success": true,
      "data": {
        "id": "5xme6yjcp",
        "title": "Decide on how much to invest in Forex",
        "minute": "A meeting was held on Zoom on 22/03/2022 to discuss the investment of funds in Forex. The meeting was attended by Omolola and Seun. The agenda was to decide on how much to invest in Forex. After deliberations, it was agreed that the sum of 200,000 naira will be invested in the trading business, and the sum of 20,000 naira will be paid to Lola as a caution fee. \n\nFurthermore, Lola agreed to become Seun's accountability partner, and a commitment contract will be created to enforce accountability measures. If Seun violates the terms of the contract, Lola is entitled to earn from his stake. The commitment contract will be made available before the end of the month. Seun welcomed the challenge, and the attendees agreed to keep in touch to ensure the investment is yielding good returns.\n\nIn conclusion, the meeting was successful, and the major decisions made included investing 200,000 naira in Forex, paying a caution fee of 20,000 naira to Lola, creating a commitment contract for accountability measures, and appointing Lola as Seun's accountability partner. The attendees agreed to keep in touch to monitor the progress of the investment.",
        "objective": "Create a plan to invest in Forex by providing Lola with a caution fee of 20,000 naira and investing a total sum of 200,000 naira in the trading business, and ensuring that the commitment contract is completed and delivered before the end of the month.",
        "keyResults": [
          {
            "id": "4ohrtigbf",
            "result": "1. Investment plan with clearly defined goals and strategies for the Forex trading business."
          },
          {
            "id": "r8ljwk7ue",
            "result": "2. Successful completion and delivery of the commitment contract to ensure accountability and transparency."
          },
          {
            "id": "5qhnl7rex",
            "result": "3. Achieving desired returns on the invested sum of 200,000 naira in the Forex trading business."
          },
          {
            "id": "omdowhe8m",
            "result": "4. Mitigating risks and minimizing losses by adhering to sound investment guidelines and market analysis."
          }
        ]
      }
    };

    const form = getUserInputs();   

    setLoading(); //--> update minute state | loading: true
    try {
      //--Fetch--//
      const response = await fetch('http://localhost:3030/generate-minute', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // process the response as needed
      const responseData = await response.json();   
      console.log(responseData)
      
      generateMinuteSuccess(responseData);
  
    }catch (error) {
      // handle any errors that might occur during the API call
      console.error(error);
    }
  }
 
  return (
    <div className='flex flex-col h-full w-full p-5'>
      <div className="sm:p-10 p-5 border rounded-[5px] flex flex-col justify-between">
      <div className='grid gap-10'>

      <div className=''>
          <div className='col-span-2'>
            <Input label={"Agenda"} name="agenda" onChange={handleInputChange}/>
          </div>
          {/* <Input label={"Date"} type={'date-picker'} dateValue={date} onChangeDate={(newDate) => setDate(newDate)}/> */}
        </div>

      <div className='grid sm:grid-cols-3 grid-cols-1 gap-10 sm:gap-4 items-end'>
          
          <Input label={"Location"} type="select" name='location' value={location} onChangeSelect={handleSelectLocation} />
          <div className='col-span-2'>
            <Input label={"Attendees"} type="tag" name="attendees"  position="in-line" tags={attendees} />
          </div>
        </div>

        <div className=''>
          <Input label="Discussion" type={'text-area'} sx={`h-20`} name="summary" onChange={handleInputChange}/>
        </div>

        <div className=''>
          <Input label={`Decision(s) Made`} type="tag" position="bottom" name="decisionsMade" tags={decisionsMade} />
        </div>
      </div>
      <Button title={"Generate"}  onClick={handleGenerate}/>
    </div>
    </div>
  );
};

export default Form;

