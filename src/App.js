import React, { useState } from 'react';
import './App.css';

function App() {
  const [title,updateTitle] = useState('This is the default title.');
  const [inputVal,updateInputVal] = useState('');

  return (
    <div className="App">
    <h1>{title}</h1>
    <h1>{inputVal}</h1>
    <input type="text" value = {inputVal} onChange={e=>updateInputVal(e.target.value)}/>
    <button type="button" onClick={()=>updateTitle("New Title")}> Click Button to update title</button>

    </div>
  );
}

export default App;
