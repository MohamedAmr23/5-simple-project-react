import React, { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('light');

 const toggleTheme=()=>{
  setTheme((prev)=>(prev==="light"?"dark":"light"))
 }

  return (
    <div >
      <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Theme</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default App