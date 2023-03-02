import { Header, Info, Footer, Form } from './component';
import { appConstants } from './constants';
import { layout } from './style';

const {currentMonthAndYear, owner} = appConstants;

const  App = (): JSX.Element  => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <Header monthAndYear={currentMonthAndYear}/>

      <div className={layout.sectionItems}>
        <Form />
        <Info />
      </div>
      <Footer owner={owner} />
    </div>
  );
}

export default App
