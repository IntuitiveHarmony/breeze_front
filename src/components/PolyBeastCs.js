import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Song, Track, Instrument, Effect } from 'reactronica';
import PolyBeastStep from './PolyBeastStep'
import UnderGrid from './UnderGrid'
import { selectCurrentSequence } from '../features/currentSequence/currentSequenceSlice'

const PolyBeastCs = () => {
  const currentSequence = useSelector(selectCurrentSequence)
  console.log(currentSequence)

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
    {currentSequence ? <>
      <Track steps={currentSequence.polyBeastCs.steps} volume={monoVolume} onStepPlay={(step, index) => {
          setPlayHead(index)
          console.log(step, index);
        }}>
        <Instrument type='membraneSynth'/>
        <Effect type='distortion' wet='.9' />
        <Effect type='autoFilter' wet='.5' />

      </Track>
      <div className='synthGrid'>
      {currentSequence.polyBeastCs.steps.map((step, index) => {
        return (
          <>
          <UnderGrid />
          <PolyBeastStep index={index} step={step} playHead={playHead}/>
          </>
        )
      })}
      </div>
    </> : <p>Waiting...</p> }
    </>
  )
}
export default PolyBeastCs;
