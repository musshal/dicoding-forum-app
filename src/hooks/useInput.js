import React from 'react';

function useInput(defaultValue) {
  const [value, setValue] = React.useState(defaultValue);
  return [value, setValue];
}

export default useInput;
