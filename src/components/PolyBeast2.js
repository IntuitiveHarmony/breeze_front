import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Song, Track, Instrument, Effect } from 'reactronica';
import PolyBeast2Step from './PolyBeast2Step'
import UnderGrid from './UnderGrid'
import { selectCurrentSequence, removeStep2, addStep2 } from '../features/currentSequence/currentSequenceSlice'

const PolyBeast2 = () => {
  const dispatch = useDispatch()
  const currentSequence = useSelector(selectCurrentSequence)


  const [note, setNote] = useState('D#4')
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
    dispatch(addStep2())
    console.log(currentSequence)
    if (currentSequence.poly2Steps.length === 15) {
      setDisableAdd(true)
    }
   if (currentSequence.poly2Steps.length < 16) {
      setDisableRemove(false)
    }
  }
  const handleRemoveStep = () => {
    dispatch(removeStep2())
    console.log(currentSequence)
    if (currentSequence.poly2Steps.length < 17) {
      setDisableAdd(false)
    }
    if (currentSequence.poly2Steps.length === 2) {
      setDisableRemove(true)
    }
  }



  return (
    <>
    {currentSequence ? <>
      <Track steps={currentSequence.poly2Steps} volume={monoVolume} onStepPlay={(step, index) => {
        if (step.name == 'null') {
              step = null
            }
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

      {currentSequence.poly2Steps.map((step, index) => {
        return (
          <>
          <PolyBeast2Step
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
export default PolyBeast2;
