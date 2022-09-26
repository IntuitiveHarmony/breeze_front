import {useState} from 'react';
import { Song, Track, Instrument, Effect } from 'reactronica';
import MonoSynthStep from './MonoSynthStep'

const SampleKick = (props) => {
  const [steps, setSteps] = useState([
      'C3', 'C3', 'C3', 'C3', 'C3', 'C3', 'C3', 'C3'
  ])

  const [playHead, setPlayHead] = useState(0)


  return (
    <>
      <Track steps={steps}  onStepPlay={(step, index) => {
          setPlayHead(index)
          }}>
          <Instrument type='sampler'/>
      </Track>
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
export default SampleKick;
