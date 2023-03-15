import React, { useRef } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const childRef = useRef(null);

  const handleClick = () => {
    childRef.current.style.backgroundColor = 'red';
  };
  return (
    <div>
      <ChildComponent ref={childRef}>
        <button onClick={handleClick}>Click me</button>
      </ChildComponent>
    </div>
  );
}

export default ParentComponent;
