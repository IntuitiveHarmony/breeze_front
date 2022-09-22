import {useState} from 'react';
import './App.css';
import axios from 'axios'
import * as Tone from 'tone'
import Test2 from './components/Test2'
import Drumkit from './components/Drumkit'



function App() {
  
  

  return (
    <>
      <h1>BreezeBeats</h1>
      <Drumkit />
    </>
  );
}

export default App;
