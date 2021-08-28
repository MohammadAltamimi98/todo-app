import React from 'react';
import Sign from './components/sign/Sign';
import ToDo from './components/todo/ToDo.jsx';
import SettingsContext from './context/settings';


function App() {
  return (
    <>
      <Sign />
      <SettingsContext>
        <ToDo />
      </SettingsContext>
    </>
  )
}

export default App;
