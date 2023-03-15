import React from 'react';

const ChildComponent = React.forwardRef((props, ref) => {
  return <div ref={ref}>{props.children}</div>;
});

export default ChildComponent;
