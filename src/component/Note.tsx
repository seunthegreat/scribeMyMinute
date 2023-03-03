import React from 'react';
import { text } from '../style';

interface NoteProps {
  title: string;
  body: string;
};
  
const Note: React.FC<NoteProps> = ({ title, body }) => (
  <div className='mb-4'>
    <p className={`${text.normal} mb-1`}>{title}</p>
    <p className={`${text.body}`}>{body}</p>
  </div>
);

export default Note;