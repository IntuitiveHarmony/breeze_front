import {useState} from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import axios from 'axios'
import { Song, Track, Instrument, Effect } from 'reactronica';
import * as Tone from 'tone'
import SequencesList from './features/sequences/SequencesList'
import AddSequenceForm from './features/sequences/AddSequenceForm'
import Drumkit from './components/Drumkit';
import Synth from './components/Synth'
import MonoSynth from './components/MonoSynth'
import MonoSynth2 from './components/MonoSynth2'




function App() {
  const [sequences, setSequences] = useState([])
  const [isPlaying, setIsPLaying] = useState(false)
  const [tempo, setTempo] = useState(100)
  const [volume, setVolume] = useState()

  //---------------------------------------------
  //  GET SEQUENCE ROUTE
  //---------------------------------------------
  // const getSequences = () => {
  //   axios
  //   .get('https://breeze-back.herokuapp.com/api/sequences')
  //   .then(
  //     (response) => setSequences(response.data),
  //     (err) => console.error(err)
  //   )
  //  .catch((error) => console.error(error))
  // }


  const handleVolume = (e) => {
    setVolume(e.target.value)
  }
  const handleTempo = (e) => {
    setTempo(e.target.value)
  }

  const play = () => {
    setIsPLaying(!isPlaying)
  }
  return (
      <>
      <h1>Breeze</h1>
      <AddSequenceForm/>
      <SequencesList />

      {/*  <Test2 /> */}
      <Song isPlaying={isPlaying} volume={volume} bpm={tempo}>
        <Synth />
        <MonoSynth />
        <MonoSynth2 />
      </Song><br/>
      <hr/>
      {isPlaying ? <button onClick={() => play()}>Stop</button> : <button onClick={() => play()}>Play</button> }
      <label>Main volume</label>
      <input onChange={handleVolume} type='range' step='1' min='-100' max='0' ></input>
      <label>Tempo: {tempo}bpm</label>
      <input onChange={handleTempo} type='range' step='1' min='10' max='700' ></input>
      <hr />
      <Drumkit />
    </>
  );
}

export default App;
