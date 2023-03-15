import React from 'react';
import Root from '../routes/route';

function AuthenticatedComponenet(OriginalComponent, isRequired) {
  function NewComponent(props) {
    const token = localStorage.getItem('token');
    return (
      <>
        {token !== null ? (
          <OriginalComponent authenticated={true} {...props} />
        ) : (
          <Root />
        )}
      </>
    );
  }
  return isRequired ? NewComponent : OriginalComponent;
}

export default AuthenticatedComponenet;
