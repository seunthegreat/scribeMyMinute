import { Header, Info, Footer, Form, Minute } from './component';
import { appConstants } from './constants';
import { useStateContext } from './context/ContextProvider';
import { layout } from './style';

const {currentMonthAndYear, owner, mock} = appConstants; //-->Constants

const  App = (): JSX.Element  => {
  const { state, dispatch } = useStateContext();
  const { showMinute } = state;

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <Header monthAndYear={currentMonthAndYear}/>
      <div className={layout.sectionItems}>
        <Form />
        { !showMinute ? 
            <Info />  : 
            <Minute 
              result={mock.minuteResult} 
              onCreateNew={() => dispatch({type: 'HIDE_MINUTE'})} />
            }
      </div>
      <Footer owner={owner} />
    </div>
  );
}

export default App
