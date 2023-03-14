import { FunctionComponent } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { MdOutlineAdd } from 'react-icons/md';
import { TfiReload } from 'react-icons/tfi';
import { Note } from '.';
import { text } from '../style';
import { useStateContext } from '../context/ContextProvider';

export interface MinuteProps {
  onCreateNew?: () => void;
  onReset: () => void;
  result: any;
};

interface keyResultType {
  id: string;
  result: string;
}

const Minute: FunctionComponent<MinuteProps> = ({ onCreateNew, result, onReset }) => {
  const {title, minute, keyResults, objective } = result.data;
  return (
    <div className='flex flex-col h-full w-full p-5'>
      <div className='flex flex-col bg-slate-100 p-5 rounded-[5px]'>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-col'>
            <p className='text-subHeading mb-2 font-semibold'>{title}</p>
            <div className='flex flex-row mb-5 items-center'>
              <p className='text-body mr-3'>Minute</p>
              <button className='hover:scale-105 flex flex-row border h-8 justify-center items-center px-2 rounded-[5px] mr-2'>
                <AiOutlineShareAlt style={{ color: 'gray' }} />
                <p className={`${text.body} ml-2`}>Share</p>
              </button>
              <button
                onClick={onReset} 
                className='hover:scale-105 flex flex-row border  h-8 justify-center items-center px-2  rounded-[5px] mr-2'>
                <TfiReload style={{ color: 'gray' }} />
                <p className={`${text.body} ml-2`}>Reset</p>
              </button>
              <button
                onClick={onCreateNew}
                className='hover:scale-105 flex flex-row border  h-8 justify-center items-center px-2  rounded-[5px]'
              >
                <MdOutlineAdd style={{ color: 'gray' }} />
                <p className={`${text.body} ml-2`}>Create New</p>
              </button>
            </div>
          </div>
        </div>
        <Note title={'Objective'} body={objective} />
        <div className='mb-4'>
          <p className={`${text.normal} mb-1`}>{'Key Results'}</p>
          {keyResults.map((item: keyResultType, index: number) => (
            <p key={index} className={`${text.body} mb-1 ml-2`}>
              {item.result}
            </p>
          ))}
        </div>
        <Note title={'Summary'} body={minute} />
      </div>
    </div>
  );
};

export default Minute;