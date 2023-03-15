import React, { useRef } from 'react';

function RefComponent() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus input</button>
    </div>
  );
}

export default RefComponent;
