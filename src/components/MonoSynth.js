import {useState} from 'react';
import { Song, Track, Instrument, Effect } from 'reactronica';
import MonoSynthStep from './MonoSynthStep'


const MonoSynth = () => {
  // const [monoGrid, setMonoGrid] = useState({
  //   steps: ['C3', 'E3', null, 'E3','C3', 'E3', 'B2', 'E3'],
  //   delay: [  0 ,   0 ,    0,    0,   0,    0,    0,   0 ]
  // })
  const [steps, setSteps] = useState([
    {name: 'C#3'}, {name: 'Eb3'}, {name: null}, {name: 'Eb3'}, {name: 'C#3'}, {name: 'Eb3'}, {name: 'Bb2'}, {name: 'Eb3'}
  ])
  const [playHead, setPlayHead] = useState(0)
  const [delayWet, setDelayWet] = useState(0)
  const [filterWet, setFilterWet] = useState(0)
  const [monoVolume, setMonoVolume] = useState(-10)





  const handleDelayFeedback = (e) => {
    setDelayWet(e.target.value)
  }
  const handleMonoVolume = (e) => {
    setMonoVolume(e.target.value)
  }
  const handleFilter = (e) => {
    setFilterWet(e.target.value)
  }


  return (
    <>


      <Track steps={steps} volume={monoVolume} onStepPlay={(step, index) => {
          setPlayHead(index)
          console.log(step, index);
        }}>
        <Instrument type='duoSynth' />
        <Effect type='feedbackDelay' wet={delayWet} />
        <Effect type='autoWah' wet={filterWet} />
      </Track>

      <hr/>
      <label>Mono Delay: </label>
      <input onChange={handleDelayFeedback} type='range' step='.1' min='0' max='.9' ></input>
      <label>Mono Filter: </label>
      <input onChange={handleFilter} type='range' step='.1' min='0' max='1' ></input>
      <label>Mono Volume: </label>
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














export default MonoSynth;
