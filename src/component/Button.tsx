import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps>  = ({onClick, title}): JSX.Element => {
  return (
    <button
      className='bg-primary rounded-[5px] hover:bg-slate-100'
      onClick={onClick}
    >
      <p className={`text-white hover:text-primary h-full py-3`}>{title}</p>
    </button>
  )
};

export default Button;