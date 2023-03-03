import { FunctionComponent } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { MdOutlineAdd } from 'react-icons/md';
import { TfiReload } from 'react-icons/tfi';
import { Note } from '.';

export interface MinuteProps {
  onCreateNew?: () => void;
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

const Minute: FunctionComponent<MinuteProps> = ({ onCreateNew, result }) => {
  return (
    <div className='p-5'>
      <div className='flex flex-col bg-slate-100 p-5 rounded-[5px]'>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-col'>
            <p className='text-subHeading mb-2'>{result.title}</p>
            <div className='flex flex-row mb-5 items-center'>
              <p className='text-body mr-3'>Minute</p>
              <button className='hover:scale-105 flex flex-row border p-2 rounded-[5px] mr-2'>
                <AiOutlineShareAlt style={{ color: 'gray' }} />
                <p className='text-body ml-2'>Share</p>
              </button>
              <button className='hover:scale-105 flex flex-row border p-2 rounded-[5px] mr-2'>
                <TfiReload style={{ color: 'gray' }} />
                <p className='text-body ml-2'>Regenerate</p>
              </button>
              <button
                onClick={onCreateNew}
                className='hover:scale-105 flex flex-row border p-2 rounded-[5px]'
              >
                <MdOutlineAdd style={{ color: 'gray' }} />
                <p className='text-body ml-2'>Create New</p>
              </button>
            </div>
          </div>
        </div>
        <Note title={result.summary.title} body={result.summary.body} />
        <Note title={result.purpose.title} body={result.purpose.body} />
        <div className='mb-4'>
          <p className='text-normal mb-1'>{result.keyTopics.title}</p>
          {result.keyTopics.topics.map((item, index) => (
            <p key={index} className='text-body ml-2'>
              {index + 1}. {item.topics}
            </p>
          ))}
        </div>
        <Note title={result.decisionMade.title} body={result.decisionMade.body} />
        <Note title={result.actionItems.title} body={result.actionItems.body} />
        <Note title={result.nextSteps.title} body={result.nextSteps.body} />
      </div>
    </div>
  );
};

export default Minute;