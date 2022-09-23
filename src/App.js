import {useState} from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import axios from 'axios'
import { Song, Track, Instrument, Effect } from 'reactronica';
import * as Tone from 'tone'
import Drumkit from './components/Drumkit';
import Synth from './components/Synth'
import MonoSynth from './components/MonoSynth'
import MonoSynth2 from './components/MonoSynth2'



function App() {
  
  

  return (
    <>
      <h1>BreezeBeats</h1>
      <Drumkit />
    </>
  );
}

export default App;
