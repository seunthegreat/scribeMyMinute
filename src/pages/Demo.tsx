import React from 'react';
import { Footer, Form, Header, Info, Minute } from '../component';
import { appConstants } from '../constants';
import { useStateContext } from '../context/ContextProvider';
import { layout } from '../style';
import { Player } from '@lottiefiles/react-lottie-player';

const {currentMonthAndYear,  mock} = appConstants; //-->Constants

const Demo =  (): JSX.Element  => {
  const { appInfo, minute, form } = useStateContext();

  const {owner, appName} = appInfo;
  const { showMinute, createNewMinute,loading, generatedResult } = minute;
  const { resetForm } = form;
  
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <Header appName={appName} monthAndYear={currentMonthAndYear}/>
      <div className={layout.sectionItems}>
        {loading && <div className='flex flex-col justify-center items-center w-full'>
          <Player
            autoplay={true}
            loop={true}
            controls={true}
            src={'https://assets9.lottiefiles.com/packages/lf20_V0z2kP.json'}
            className="w-[70%] h-60 object-contain"
          />
        </div>}
        {!showMinute && !loading && <Info />}
        {showMinute && !loading && (
           <Minute
            onReset={resetForm}
            onCreateNew={createNewMinute}
            result={generatedResult !== null && generatedResult}
          />
        )}
        <Form />
      </div>
      <Footer owner={owner} />
    </div>
  )
};

export default Demo;