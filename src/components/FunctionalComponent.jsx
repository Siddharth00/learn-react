import React, { useState, useEffect } from 'react';
import withAuthentication from './withAuthentication';

function FunctionalComponent({ name }) {
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    console.log(
      'The componenet is now mounted and re-rendered successfully !'
    );

    return () =>
      console.log('The componenet is now unmounted successfully !');
  }, [update]);

  const handleUpdate = (e) => {
    e.preventDefault();
    setUpdate(!update);
  };
  return (
    <>
      <div>Hi {name}.I am Functional Component and I am Young :)</div>
      <button onClick={handleUpdate}>Update me</button>
    </>
  );
}

export default withAuthentication(FunctionalComponent, true);
