import * as React from 'react';
import { text } from '../style';
import { Player } from '@lottiefiles/react-lottie-player';
import { contents } from '../constants';

const {headline, body} = contents.info;

const Info = (): JSX.Element => {
  return (
    <div className='flex flex-col w-full h-full p-5'>
      <div className='bg-slate-100 p-3 rounded-[5px]'>
        <p className={`${text.subHeading} mb-2`}>{headline}</p>
        <p className={`${text.body}`}>{body}</p>
      </div>
      <Player
          autoplay={true}
          loop={true}
          controls={true}
          src={"https://assets9.lottiefiles.com/packages/lf20_re3xr9zy.json"}
          className="w-[70%] h-[80%] object-contain hidden md:block"
        />
    </div>
  );
}

export default Info
