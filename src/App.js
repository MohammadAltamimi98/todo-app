import React from 'react';

import ToDo from './components/todo/ToDo.jsx';
import SettingsContext from './context/settings';


function App() {
  return (
    <SettingsContext>
      <ToDo />
    </SettingsContext>
  )
}

export default App;
