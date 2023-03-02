import * as React from 'react';
import { text } from '../style';

interface Props {
  owner? : string;
}

const Footer: React.FC<Props> = ({ owner }) => {
  return (
    <footer className="py-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <p className={`${text.body}`}>&copy; {owner || `Dexhub Creations`}. All rights reserved.</p>
        <p className={`${text.body}`}>
          Powered by <a href="https://openai.com/" className="text-blue-500 hover:underline">OpenAI GPT-3</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
