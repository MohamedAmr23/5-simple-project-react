import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
    setName('');
  };

  return (
    <div>
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
        {submittedName && <p>submitName : {submittedName}</p> }
    </div>
  )
}

export default App