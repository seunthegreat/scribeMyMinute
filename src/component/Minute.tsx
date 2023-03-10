import { FunctionComponent } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { MdOutlineAdd } from 'react-icons/md';
import { TfiReload } from 'react-icons/tfi';
import { Note } from '.';
import { text } from '../style';

export interface MinuteProps {
  onCreateNew?: () => void;
  data: any;
  result: {
    title: string;
    summary: {
      title: string;
      body: string;
    };
    purpose: {
      title: string;
      body: string;
    };
    keyTopics: {
      title: string;
      topics: {
        topics: string;
        id: number;
      }[];
    };
    decisionMade: {
      title: string;
      body: string;
    };
    actionItems: {
      title: string;
      body: string;
    };
    nextSteps: {
      title: string;
      body: string;
    };
  };
};

interface KeyTopicsType {
  id: string;
  topic: string
}

interface keyResultType {
  id: string;
  result: string;
}

const Minute: FunctionComponent<MinuteProps> = ({ onCreateNew, result, data }) => {

  return (
    <div className='p-5'>
      <div className='flex flex-col bg-slate-100 p-5 rounded-[5px]'>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-col'>
            <p className='text-subHeading mb-2 font-semibold'>{data.title}</p>
            <div className='flex flex-row mb-5 items-center'>
              <p className='text-body mr-3'>Minute</p>
              <button className='hover:scale-105 flex flex-row border h-10 justify-center items-center px-2 rounded-[5px] mr-2'>
                <AiOutlineShareAlt style={{ color: 'gray' }} />
                <p className='text-body ml-2'>Share</p>
              </button>
              <button className='hover:scale-105 flex flex-row border  h-10 justify-center items-center px-2  rounded-[5px] mr-2'>
                <TfiReload style={{ color: 'gray' }} />
                <p className='text-body ml-2'>Regenerate</p>
              </button>
              <button
                onClick={onCreateNew}
                className='hover:scale-105 flex flex-row border  h-10 justify-center items-center px-2  rounded-[5px]'
              >
                <MdOutlineAdd style={{ color: 'gray' }} />
                <p className='text-body ml-2'>Create New</p>
              </button>
            </div>
          </div>
        </div>
        <Note title={'Summary'} body={data.summary} />
        <Note title={'Purpose'} body={data.purpose} />
        <div className='mb-4'>
          <p className='text-normal mb-1'>{result.keyTopics.title}</p>
          {data.keyTopics.map((item: KeyTopicsType, index: number) => (
            <p key={index} className={`${text.body} mb-1 ml-2`}>
              {item.topic}
            </p>
          ))}
        </div>
        <Note title={'Objective'} body={data.objective} />
        <div className='mb-4'>
          <p className='text-normal mb-1'>{'Key Results'}</p>
          {data.keyResults.map((item: keyResultType, index: number) => (
            <p key={index} className={`${text.body} mb-1 ml-2`}>
              {item.result}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Minute;