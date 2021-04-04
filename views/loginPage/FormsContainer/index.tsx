import React from 'react';
import SignIn from './signIn';
import SignUp from './signUp';

const FormsContainer: React.FC = () => {
  return (
    <div className='absolute w-full h-full top-0 left-0' >
      <div className='signin-signup absolute grid w-full z-5 lg:w-1/2'>
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
};

export default FormsContainer;
