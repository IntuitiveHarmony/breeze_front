import {useState, useEffect } from 'react';
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
import PolyBeast0 from './components/PolyBeast0'
import PolyBeast1 from './components/PolyBeast1'
import PolyBeast2 from './components/PolyBeast2'
import SampleKick from './components/SampleKick'
import Login from './components/Login'
import Navbar from './components/Navbar';
import Kick from './components/Kick';
import DeleteSequenceForm from './features/sequences/DeleteSequenceForm';
import useStyles from './components/hooks/useStyles';
import useTimer from './components/hooks/useTimer';
import TrackList from './components/808/TrackList';
import useStore from './components/hooks/useStore'
import PlayHead from './components/808/PlayHead';
import {Provider} from './components/hooks/useStore'
import ToolBar from './components/808/Toolbar';
import Steps from './components/808/Steps';



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
  if (currentSequence === undefined) {
    sequenceName = ''
    bpm = 100
  } else {
    sequenceName = currentSequence.name
    bpm = currentSequence.tempo
  }

  const baseBPMPerOneSecond = 60
    const stepsPerBar = 8
    const beatsPerBar = 4
    const barsPerSequence = 2
    const totalSteps = stepsPerBar * barsPerSequence
    const totalBeats = beatsPerBar * barsPerSequence

    const [bpm2, setBPM] = useState(120)
    const [startTime, setStartTime] = useState(null)
    const [pastLapsedTime, setPastLapse] = useState(0)
    const [currentStepID, setCurrentStep] = useState(null)
    const [getNotesAreaWidthInPixels] = useStyles(totalSteps)

    const notesAreaWidthInPixels = getNotesAreaWidthInPixels(totalSteps)
    const timePerSequence = baseBPMPerOneSecond / bpm2 * 1000 * totalBeats
    const timePerStep = timePerSequence / totalSteps
    const isSequencePlaying = startTime !== null
    const playerTime = useTimer(isSequencePlaying)
    const lapsedTime = isSequencePlaying ? Math.max(0, playerTime - startTime) : 0
    const totalLapsedTime = pastLapsedTime + lapsedTime

    useEffect(() => {
        if (isSequencePlaying) {
            setCurrentStep(Math.floor(totalLapsedTime / timePerStep) % totalSteps)
        } else {
            setCurrentStep(null)
        }
    }, [isSequencePlaying, timePerStep, totalLapsedTime, totalSteps])

    const toolBarProps = {
        setStartTime,
        setPastLapse,
        setBPM,
        isSequencePlaying,
        startTime,
        bpm2
    }

    const playHeadProps = {
        notesAreaWidthInPixels,
        timePerSequence,
        totalLapsedTime
    }

    const trackListProps = {
        currentStepID
    }


  return (
      <>
        <h1>polybeast</h1>
        <h3>{sequenceName}</h3>

        <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />

        <div className='crud-container'>
          <AddSequenceForm/>
          <SequencesList />
          <EditSequenceForm />
          <DeleteSequenceForm />
        </div>
        <Song isPlaying={isPlaying} volume={volume} bpm={bpm}>
          <Synth />
        {/*  <MonoSynth />
          <MonoSynth2 /> */}
          <hr/>
          <PolyBeast2 />
          <PolyBeast1 />
          <PolyBeast0 />

        </Song><br/>
        <hr/>


        {isPlaying ? <button onClick={() => play()}>Stop</button> : <button onClick={() => play()}>Play</button> }
        <label>Main volume</label>
        <input onChange={handleVolume} type='range' step='1' min='-100' max='0' ></input>
        <label>Tempo: {bpm} bpm</label>
        <input onChange={handleTempo} type='range' step='1' min='10' max='700' ></input>
        <hr />

        <h1 className="beats-title">polyBeats</h1>
        <Provider>
        <div>
        <main className="app">
                <div className="app_header">
                    <ToolBar {...toolBarProps} />
                </div>
                <Steps count={totalSteps} />
                <div className="app_content">
                    <TrackList {...trackListProps} />
                </div>
                <footer className="app_footer">
                </footer>
            </main >
        </div>
        </Provider>
      </>
  );
}

export default App;
