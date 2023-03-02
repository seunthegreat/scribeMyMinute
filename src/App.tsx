import React from 'react';

interface IAppProps {
}

const  App = (props: IAppProps)  => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-red-200">
      <h1 className="text-3xl font-bold text-blue-600">
        Works now
      </h1>
    </div>
  );
}

export default App
