import React from 'react';
import { Footer, Form, Header, Info, Minute } from '../component';
import { appConstants } from '../constants';
import { useStateContext } from '../context/ContextProvider';
import { layout } from '../style';

const {currentMonthAndYear,  mock} = appConstants; //-->Constants

const Demo =  (): JSX.Element  => {
  const { appInfo, minute } = useStateContext();

  const {owner, appName} = appInfo;
  const { showMinute, createNewMinute,loading, generatedResult } = minute;
  
  console.log(generatedResult !== null && generatedResult.response);
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <Header appName={appName} monthAndYear={currentMonthAndYear}/>
      <div className={layout.sectionItems}>
        <Form />
        {!showMinute ?
          <Info /> :
          <Minute
            result={mock.minuteResult}
            onCreateNew={createNewMinute}
            data={generatedResult !== null && generatedResult.response}
          />
        }
        <div>{!loading ? 'Not loading': 'loading'}</div>
      </div>
      <Footer owner={owner} />
    </div>
  )
};

export default Demo;