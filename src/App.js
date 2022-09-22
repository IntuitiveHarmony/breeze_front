import {useState} from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import axios from 'axios'
import * as Tone from 'tone'
import Test2 from './components/Test2'
import Synth from './components/Synth'
import MonoSynth from './components/MonoSynth'

function App() {
  const [sequences, setSequences] = useState([])

  //---------------------------------------------
  //  GET SEQUENCE ROUTE
  //---------------------------------------------
  const getSequences = () => {
    axios
    .get('https://breeze-back.herokuapp.com/api/sequences')
    .then(
      (response) => setSequences(response.data),
      (err) => console.error(err)
    )
   .catch((error) => console.error(error))
  }

  return (
    <>
      <h1>Breeze</h1>
      <h4></h4>
      <Test2 />
      <Synth />
      <MonoSynth />
    </>
  );
}

export default App;
