import {useState} from 'react';
import { Song, Track, Instrument, Effect } from 'reactronica';



const MonoSynth = () => {
  // const [monoGrid, setMonoGrid] = useState({
  //   steps: ['C3', 'E3', null, 'E3','C3', 'E3', 'B2', 'E3'],
  //   delay: [  0 ,   0 ,    0,    0,   0,    0,    0,   0 ]
  // })
  const [steps, setSteps] = useState([
    {name: 'C#3'}, {name: 'Eb3'}, {name: null}, {name: 'Eb3'}, {name: 'C#3'}, {name: 'Eb3'}, {name: 'Bb2'}, {name: 'Eb3'}
  ])
  const [delayWet, setDelayWet] = useState(0)
  const [monoVolume, setMonoVolume] = useState(-10)



  const handleDelayFeedback = (e) => {
    setDelayWet(e.target.value)
  }
  const handleMonoVolume = (e) => {
    setMonoVolume(e.target.value)
  }


  return (
    <>
    <hr/>

      <Track steps={steps} volume={monoVolume} onStepPlay={(step, index) => {
          console.log(step, index);
        }}>
        <Instrument type='pluckSynth' />
        <Effect type='feedbackDelay' wet={delayWet} />
      </Track>

      <label>Mono Delay: </label>
    <input onChange={handleDelayFeedback} type='range' step='.1' min='0' max='.9' ></input>
    <label>Mono Volume: </label>
  <input onChange={handleMonoVolume} type='range' step='1' min='-100' max='0' ></input>
    </>
  )
}
export default MonoSynth;
