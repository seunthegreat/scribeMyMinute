import * as React from 'react';
import { text } from '../style';

interface Props {
  monthAndYear: string;
  appName: string;
}

const Header: React.FC<Props>= ({ monthAndYear, appName }) => {
  return (
    <div className="h-48 w-full bg-[#343995] flex-col flex items-center justify-center">
      <p className={`${text.heading} text-white`}>{appName}</p>
      <p className={`${text.small} text-white mt-2`}>{monthAndYear}</p>
    </div>  
  );
};

export default Header
