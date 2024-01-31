import React from 'react';
import './App.css';

import Count from './Component/Count';
import { useDispatch } from 'react-redux';


function App() {

  const dispatch=useDispatch();

  return (
    <div className="App">
      <button onClick={e=>{dispatch({type:'INCREAMENT'})}}>Increament</button>
      <Count/>
      <button onClick={e=>{dispatch({type:'DECREAMENT'})}}>Decreament</button>
    </div>
  );
}

export default App;
