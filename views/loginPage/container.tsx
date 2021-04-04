import React, { useRef, useEffect, useState } from 'react';

import FormsContainer from './FormsContainer';
import Panels from './Panels';

const Container: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const [ isAnimal, setIsAnimal ] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsAnimal(true);
    }, 500);
  }, []);

  return (
    <div
      className={`login-container relative h-screen lg:min-h-screen w-full overflow-hidden${isAnimal ? ' animal' : ''}`}
      ref={container}
    >
      <FormsContainer />
      <Panels container={container} />
    </div>
  );
};

export default Container;

