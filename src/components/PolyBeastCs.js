import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Song, Track, Instrument, Effect } from 'reactronica';
import PolyBeastStep from './PolyBeastStep'
import UnderGrid from './UnderGrid'
import { selectCurrentSequence, removeStep, addStep } from '../features/currentSequence/currentSequenceSlice'

const PolyBeastCs = () => {
  const dispatch = useDispatch()
  const currentSequence = useSelector(selectCurrentSequence)
  console.log(currentSequence)

  const [playHead, setPlayHead] = useState(0)
  const [delayWet, setDelayWet] = useState(0)
  const [monoVolume, setMonoVolume] = useState(-10)

  const [steps, setSteps] = useState(0)


  const handleDelayFeedback = (e) => {
    setDelayWet(e.target.value)
  }
  const handleMonoVolume = (e) => {
    setMonoVolume(e.target.value)
  }


  const handleAddStep = () => {
    dispatch(addStep())
  }
  const handleRemoveStep = () => {
    dispatch(removeStep())
  }

  return (
    <>
    {currentSequence ? <>
      <Track steps={currentSequence.polyCsSteps} volume={monoVolume} onStepPlay={(step, index) => {
          setPlayHead(index)
          console.log(step, index);
        }}>
        <Instrument type='membraneSynth'/>
        <Effect type='distortion' wet='.9' />
        <Effect type='autoFilter' wet='.5' />

      </Track>
      <div className='synthGrid'>
      {currentSequence.polyCsSteps.map((step, index) => {
        return (
          <>
          <UnderGrid />
          <PolyBeastStep index={index} step={step} playHead={playHead}/>
          </>
        )
      })}
      <button onClick={handleRemoveStep}>- Step</button>
      <button onClick={handleAddStep}>+ Step</button>
      </div>

    </> : <p>Waiting...</p> }
    </>
  )
}
export default PolyBeastCs;
