import {useState} from 'react';
import './App.css';
import axios from 'axios'
import * as Tone from 'tone'
import Test2 from './components/Test2'




function App() {
  let synth = new Tone.Synth({ oscillator: { type: "square8" } }).toDestination()

  const playNote = (note) => {
    console.log(note)
    synth.triggerAttackRelease(note, "16n")
  }

  const playSynth = (note) => {
    synth.triggerAttackRelease(note, '32n')
  }

  return (
    <>
      <h1>BreezeBeats</h1>
      <Test2 />
    </>
  );
}

export default App;
