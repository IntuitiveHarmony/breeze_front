import {useState} from 'react';
import { Song, Track, Instrument, Effect } from 'reactronica';
import MonoSynthStep from './MonoSynthStep'


const PolyBeastC# = () => {
  // const [monoGrid, setMonoGrid] = useState({
  //   steps: ['C3', 'E3', null, 'E3','C3', 'E3', 'B2', 'E3'],
  //   delay: [  0 ,   0 ,    0,    0,   0,    0,    0,   0 ]
  // })
  const [steps, setSteps] = useState([
    {name: 'Eb5'}, {name: 'C#5'}, {name: null}, {name: 'D#5'}, {name: 'G#5'}, {name: 'Gb5'}, {name: 'G#5'}, {name: 'Gb5'}
  ])
  const [playHead, setPlayHead] = useState(0)
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


      <Track steps={steps} volume={monoVolume} onStepPlay={(step, index) => {
          setPlayHead(index)
          console.log(step, index);
        }}>
        <Instrument type='duoSynth' />
        <Effect type='feedbackDelay' wet={delayWet} />
      </Track>


      <hr/>
      <label>Mono2 Delay: </label>
      <input onChange={handleDelayFeedback} type='range' step='.1' min='0' max='.9' ></input>
      <label>Mono2 Volume: </label>
      <input onChange={handleMonoVolume} type='range' step='1' min='-100' max='0' ></input>
      <div className='synthGrid'>
      {steps.map((step, index) => {
        return (
          <MonoSynthStep index={index} step={step} playHead={playHead}/>
        )
      })}
      </div>
    </>
  )
}
export default PolyBeastC#;
