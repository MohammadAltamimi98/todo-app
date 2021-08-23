import React, { useState } from 'react';
export const settingContext = React.createContext();

function SettingContext(props) {
  // define the following states:
  // num of items that will be shown per page 
  // whetehr items in list are done or not
  // return these states as one onject sent throw value in provider.
  const [elementsPerPage, setElementsPerPage] = useState(3);
  const [isCompleted, setIsCompleted] = useState(true);

  const state = {
    elementsPerPage,
    isCompleted,
    setElementsPerPage,
    setIsCompleted,
  }
  return (
    <settingContext.Provider value={state}>
      {props.children}
    </settingContext.Provider>
  )
}

export default SettingContext;