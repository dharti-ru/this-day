import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NightlyReflections} from './components/NightlyReflections/NightlyReflections';

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      {/* {appData.forEach(el => {
        return (<h1>{el}</h1>)
      })} */}
      <h1>This Day</h1>
      <p>Welcome to your daily reflection space ✨</p>
      <NightlyReflections><h2>Nightly Reflections ✨</h2></NightlyReflections>
    </div>
  );
}

export default App;
