import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Song, Track, Instrument, Effect } from 'reactronica';
import PolyBeastStep from './PolyBeastStep'
import UnderGrid from './UnderGrid'
import { selectCurrentSequence, removeStep, addStep } from '../features/currentSequence/currentSequenceSlice'

const PolyBeast1 = () => {
  const dispatch = useDispatch()
  const currentSequence = useSelector(selectCurrentSequence)


  const [note, setNote] = useState('C#3')
  const [disableRemove, setDisableRemove] = useState(false)
  const [disableAdd, setDisableAdd] = useState(false)
  const [playHead, setPlayHead] = useState(1)
  const [delayWet, setDelayWet] = useState(1)
  const [monoVolume, setMonoVolume] = useState(-10)

  const [steps, setSteps] = useState([])


  const handleDelayFeedback = (e) => {
    setDelayWet(e.target.value)
  }
  const handleMonoVolume = (e) => {
    setMonoVolume(e.target.value)
  }

  //--------------------------------------------
  //    ADD REMOVE STEPS AND DISABLE BUTTONS
  //-------------------------------------------
  const handleAddStep = () => {
    dispatch(addStep())
    console.log(currentSequence)
    if (currentSequence.poly1Steps.length === 15) {
      setDisableAdd(true)
    }
   if (currentSequence.poly1Steps.length < 16) {
      setDisableRemove(false)
    }
  }
  const handleRemoveStep = () => {
    dispatch(removeStep())
    console.log(currentSequence)
    if (currentSequence.poly1Steps.length < 17) {
      setDisableAdd(false)
    }
    if (currentSequence.poly1Steps.length === 2) {
      setDisableRemove(true)
    }
  }



  return (
    <>
    {currentSequence ? <>
      <Track steps={currentSequence.poly1Steps} volume={monoVolume} onStepPlay={(step, index) => {
          setPlayHead(index)
          console.log(step, index);
        }}>
        <Instrument type='membraneSynth'/>
        <Effect type='distortion' wet='.9' />
        <Effect type='autoFilter' wet='.5' />

      </Track>
      <div className='synthGrid'>
      {disableRemove ?
        <button onClick={handleRemoveStep} disabled>Min!!!</button>
        :
        <button onClick={handleRemoveStep}>- Step</button> }
      {disableAdd ?
        <button onClick={handleAddStep} disabled>Max!!!</button>
        :
        <button onClick={handleAddStep}>+ Step</button> }

      {currentSequence.poly1Steps.map((step, index) => {
        return (
          <>
          <UnderGrid />
          <PolyBeastStep
            currentSequence={currentSequence}
            index={index}
            step={step}
            playHead={playHead}
            note={note}
            setSteps={setSteps}
          />
          </>
        )
      })}

      </div>

    </> : <p>Waiting...</p> }
    </>
  )
}
export default PolyBeast1;
