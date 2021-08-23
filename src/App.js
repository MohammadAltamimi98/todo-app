import React from 'react';
import ToDo from './components/todo/todo.js';
import SettingContext from './context/settings';

import React from 'react'

function App() {
  return (
    <SettingContext>
      <ToDo />
    </SettingContext>
  )
}

export default App;
