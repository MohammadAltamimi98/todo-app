import React from 'react';
import Sign from './components/sign/Sign';
import ToDo from './components/todo/ToDo.jsx';
import SettingsContext from './context/settings';
import Auth from './context/auth'


function App() {
  return (
    <>
      <Auth>
        <Sign />
        <SettingsContext>
          <ToDo />
        </SettingsContext>
      </Auth>
    </>
  )
}

export default App;
