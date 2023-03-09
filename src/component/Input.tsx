import React, { useState, ChangeEvent, useEffect } from 'react';
import { text } from '../style';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import Select from 'react-select';

import { MdOutlineAddCircleOutline } from "react-icons/md"
import { tagInput, useStateContext } from '../context/ContextProvider';

interface InputProps {
  label: string;
  name?: string;
  value?: string;
  tags?: Tag[];
  onChange?: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onChangeDate?: (date: Date) => void;
  onChangeSelect? : (location: LocationType | null) => void;
  dateValue?: Date;
  type?: string;
  position?: string;
  sx?: string;
};

export type LocationType = {
  value: string;
  label: string;
};

export interface Tag {
  id: number;
  name: string;
};

const locations: LocationType[] = [
  { value: 'zoom', label: 'Zoom' },
  { value: 'google-meet', label: 'Google Meet' },
  { value: 'office', label: 'Office' },
  { value: 'online(others)', label: 'Online(others)' },
];

const Input: React.FC<InputProps> = ({ label, value, onChange, onChangeDate, dateValue, 
  onChangeSelect, type, sx, name, tags, position }) => {
  //--Context state--//
  const {form} = useStateContext();
  const { updateTag } = form;
  const {agenda, date, location,  decisionsMade, summary } = form.inputs;

  //--component state--//
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(null);
  const [tagValue, setTagValue] = useState('');
  //const [tags, setTags] = useState<Tag[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTagValue(event.target.value);
  };

  const getLocationByLabel = (label: string | undefined, locations: LocationType[] ): LocationType | undefined => {
    return locations.find((location) => location.label === label);
  }

  useEffect(() => {
   // console.log(location);
  },[])

  const handleAddTag = () => {
    if (tagValue.trim()) {
      const newTag: Tag = {
        id: Date.now(),
        name: tagValue.trim(),
      };
      
      if (name == 'attendees'){
        const updatedAttendees = tags ? [...tags, newTag] : [newTag];
        updateTag('attendees', updatedAttendees);
      }
      if (name == 'decisionsMade'){
        const updatedAttendees = tags ? [...tags, newTag] : [newTag];
        updateTag('decisionsMade', updatedAttendees);
      }
      if (name == 'actions'){
        const updatedAttendees = tags ? [...tags, newTag] : [newTag];
        updateTag('actions', updatedAttendees);
      }

      setTagValue('');
    }
  };
  
  return (
    <>
      {!type && (
        <div className="flex flex-col mb-4">
          <p className={`${text.body} ${isFocused ? 'text-[#343995]' : ''}`}>{label}</p>
          <input
            className={`border-b-[1px] border-gray-400 py-2 outline-none focus:border-blue-500 
            transition-colors ${isFocused ? 'border-[#343995]' : ''} text-sm`}
            type="text"
            value={value}
            onChange={onChange}
            name={name}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
      )}

      {type === 'tag' && (
        <div className="flex flex-col mb-4">
          <p className={`${text.body} ${isFocused ? 'text-[#343995]' : ''}`}>{label} {`: ${tags && tags.length}`}</p>
          <div className={`flex flex-row justify-between border-b-[1px] ${isFocused ? 'border-[#343995]' : 'border-gray-400'}`}>
            <div className='flex flex-row w-full'>
              { (position == 'in-line' && tags) && tags.map((item, index) => (
                <div key={index} className='bg-slate-200 px-2 h-10  items-center flex justify-center m-2 mr-0 rounded-[3px]'>
                  <p className={`${text.body}`}>{item.name}</p>
                </div>
              ))}
              <input
                className={`py-2 outline-none focus:border-blue-500 
                transition-colors text-sm w-full ml-2`}
                type="text"
                value={tagValue}
                name={name}
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </div>
            <button className='hover:scale-110 text-[#343995]' onClick={handleAddTag}>
              <MdOutlineAddCircleOutline />
            </button>
          </div>
          {position == 'bottom' && (
            <div className='flex flex-grow w-full grid grid-cols-2 gap-4 py-5'>
              {tags && tags.map((item, index) => (
                <div key={index} className='bg-slate-200 p-3 h-[50px] w-full items-center flex  mr-0 rounded-[3px]'>
                  <p className={`${text.body} mr-2`}>{index+1}{'. '}</p>
                  <p className={`${text.body}`}>{item.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {type === 'text-area' && (
        <div className="flex flex-col mb-4">
          <p className={`${text.body} ${isFocused ? 'text-[#343995]' : ''} mb-2`}>{label}</p>
          <textarea
            className={`border-b-[1px] border-gray-400 py-2 outline-none focus:border-blue-500 
            transition-colors ${isFocused ? 'border-[#343995] border rounded-[5px] px-2' : ''} resize-y ${sx} text-sm`}
            value={value}
            onChange={onChange}
            name={name}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
      )}

      {type === 'date-picker' && (
        <div className="flex flex-col mb-4">
          <p className={`${text.body} ${isFocused ? 'text-[#343995]' : ''} mb-2`}>{label}</p>
          {/* <DateTimePicker
            onChange={onChangeDate} 
            value={dateValue}
            calendarIcon={null}
            clearIcon={null}
            className={""}
            /> */}
        </div>
      )}

      {type === 'select' && (
        <div className="flex flex-col mb-4">
          <p className={`${text.body} ${isFocused ? 'text-[#343995]' : ''}`}>{label}</p>
          <Select
            value={getLocationByLabel(location, locations)}
            onChange={onChangeSelect}
            options={locations}
            className="text-sm border-b-[1px] border-gray-400 py-[3.5px]"
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                minHeight: '30px',
                height: '30px',
                justifyContent: 'center',
                marginVertical: '2px',
                borderColor: 'transparent',
                borderRadius: '0px',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }),
              placeholder: (baseStyles) => ({
                ...baseStyles,
                fontSize: 'text-sm',
              }),
            }}
            placeholder="Select"
          />
        </div>
      )}
    </>
  );
};

export default Input;
