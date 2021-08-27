import React, { useState, useEffect } from 'react';
export const settingContext = React.createContext();

function SettingsContext(props) {
  // define the following states:
  // num of items that will be shown per page 
  // whetehr items in list are done or not
  // return these states as one onject sent throw value in provider.
  const [elementsPerPage, setElementsPerPage] = useState(4);
  const [showCompleted, setShowCompleted] = useState(false);
  const [detectStorage, setDetectStorage] = useState(0)

  function holdValues(e) {
    e.preventDefault();
    const obj = { elementsPerPage: e.target.pageNumber.value, showCompleted: e.target.incomplete.value };
    localStorage.setItem('settings', JSON.stringify(obj));
    setDetectStorage(detectStorage + 1);
  }


  useEffect(() => {
    let localData = localStorage.getItem('settings');
    if (localData) {
      let settings = JSON.parse(localData);
      setElementsPerPage(Number(settings.elementsPerPage));
      if (settings.showCompleted == 'true') setShowCompleted(true);
      if (settings.showCompleted == 'false') setShowCompleted(false);
    }
  }, [detectStorage]);



  const state = {
    elementsPerPage,
    showCompleted,
    setElementsPerPage,
    setShowCompleted,
    holdValues,
    detectStorage
  }
  return (
    <settingContext.Provider value={state}>
      {props.children}
    </settingContext.Provider>
  )
}

export default SettingsContext;