import React, { useState, ChangeEvent } from 'react';
import { text } from '../style';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import Select from 'react-select';

import { MdOutlineAddCircleOutline } from "react-icons/md"

interface InputProps {
  label: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onChangeDate?: (date: Date) => void;
  dateValue?: Date;
  type?: string;
  sx?: string;
};

export type LocationType = {
  value: string;
  label: string;
};

interface Attendee {
  id: number;
  name: string;
};



const locations: LocationType[] = [
  { value: 'zoom', label: 'Zoom' },
  { value: 'google-meet', label: 'Google Meet' },
  { value: 'office', label: 'Office' },
  { value: 'online(others)', label: 'Online(others)' },
];

const Input: React.FC<InputProps> = ({ label, value, onChange, onChangeDate, dateValue, type, sx }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(null);
  const [tagValue, setTagValue] = useState('');
  const [attendees, setAttendees] = useState<Attendee[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTagValue(event.target.value);
  };

  const handleAddAttendee = () => {
    if (tagValue.trim()) {
      const newAttendee: Attendee = {
        id: Date.now(),
        name: tagValue.trim(),
      };
      setAttendees([...attendees, newAttendee]);
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
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
      )}

      {type === 'tag' && (
        <div className="flex flex-col mb-4">
          <p className={`${text.body} ${isFocused ? 'text-[#343995]' : ''}`}>{label} {`: ${attendees.length}`}</p>
          <div className={`flex flex-row justify-between border-b-[1px] ${isFocused ? 'border-[#343995]' : 'border-gray-400'}`}>
            <input
              className={`py-2 outline-none focus:border-blue-500 
                transition-colors text-sm w-full`}
              type="text"
              value={tagValue}
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <button className='hover:scale-110 text-[#343995]' onClick={handleAddAttendee}>
              <MdOutlineAddCircleOutline />
            </button>
          </div>
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
            value={selectedLocation}
            onChange={(location) => setSelectedLocation(location)}
            options={locations}
            className="text-sm border-b-[1px] border-gray-400 py-[3.5px]"
            styles={{
              control: (baseStyles, state) => ({
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
              placeholder: (baseStyles, state) => ({
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
