import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentSequence } from './features/currentSequence/currentSequenceSlice'
import { changeTempo } from './features/currentSequence/currentSequenceSlice'
import { Counter } from './features/counter/Counter';
import './App.css';
import axios from 'axios'
import { Song, Track, Instrument, Effect } from 'reactronica';
import * as Tone from 'tone'
import SequencesList from './features/sequences/SequencesList'
import AddSequenceForm from './features/sequences/AddSequenceForm'
import EditSequenceForm from './features/currentSequence/EditSequence'
import Drumkit from './components/Drumkit';
import Synth from './components/Synth'
import MonoSynth from './components/MonoSynth'
import MonoSynth2 from './components/MonoSynth2'
import PolyBeastCs from './components/PolyBeastCs'
import SampleKick from './components/SampleKick'
import Login from './components/Login'
import Navbar from './components/Navbar';
import Kick from './components/Kick';




function App() {
  const dispatch = useDispatch()
  const currentSequence = useSelector(selectCurrentSequence)

  const [sequences, setSequences] = useState([])
  const [isPlaying, setIsPLaying] = useState(false)
  // const [tempo, setTempo] = useState(40)
  const [volume, setVolume] = useState()
  const [currentUser, setCurrentUser] = useState({})

  const handleVolume = (e) => {
    setVolume(e.target.value)
  }
  const handleTempo = (e) => {
    dispatch(changeTempo(e.target.value))
    // changeTempo(e.target.value)
  }
  const play = () => {
    setIsPLaying(!isPlaying)
  }

  //------------------------------------------
  //  STORE IS UNDEFINED AT PAGE LOAD
  //------------------------------------------
  let bpm
  let sequenceName
  if (currentSequence == undefined) {
    sequenceName = ''
    bpm = 100
  } else {
    sequenceName = currentSequence.name
    bpm = currentSequence.tempo
  }



  return (
      <>
        <h1>Breeze</h1>
        <h3>{sequenceName}</h3>
        <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <h4></h4>

        <AddSequenceForm/>
        <SequencesList />
        <EditSequenceForm />
        <Song isPlaying={isPlaying} volume={volume} bpm={bpm}>
          <Synth />
          <MonoSynth />
          <MonoSynth2 />
          <hr/>
          <PolyBeastCs />
          <PolyBeastCs />
          <PolyBeastCs />
          <PolyBeastCs />
          <PolyBeastCs />
          <PolyBeastCs />
          <PolyBeastCs />
        </Song><br/>
        <hr/>


        {isPlaying ? <button onClick={() => play()}>Stop</button> : <button onClick={() => play()}>Play</button> }
        <label>Main volume</label>
        <input onChange={handleVolume} type='range' step='1' min='-100' max='0' ></input>
        <label>Tempo: {bpm} bpm</label>
        <input onChange={handleTempo} type='range' step='1' min='10' max='700' ></input>
        <hr />
        <Drumkit />
      </>
  );
}

export default App;
