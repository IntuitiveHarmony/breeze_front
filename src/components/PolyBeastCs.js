import {useState} from 'react';
import { Song, Track, Instrument, Effect } from 'reactronica';
import PolyBeastStep from './PolyBeastStep'


const PolyBeastCs = () => {

  const [steps, setSteps] = useState([
    null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
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


      <div className='synthGrid'>
      {steps.map((step, index) => {
        return (
          <PolyBeastStep index={index} step={step} playHead={playHead}/>
        )
      })}
      </div>
    </>
  )
}
export default PolyBeastCs;
