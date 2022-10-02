import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Song, Track, Instrument, Effect } from 'reactronica';
import PolyBeast0Step from './PolyBeast0Step'
import UnderGrid from './UnderGrid'
import { selectCurrentSequence, removeStep, addStep } from '../features/currentSequence/currentSequenceSlice'

const PolyBeast0 = () => {
  const dispatch = useDispatch()
  const currentSequence = useSelector(selectCurrentSequence)


  const [note, setNote] = useState('C#3')
  const [disableRemove, setDisableRemove] = useState(false)
  const [disableAdd, setDisableAdd] = useState(false)
  const [playHead, setPlayHead] = useState(0)
  const [delayWet, setDelayWet] = useState(0)
  const [monoVolume, setMonoVolume] = useState(-10)

  const [steps, setSteps] = useState([])

  // if (currentSequence != undefined) {
  //   const steps2 = currentSequence.steps.map((step) => {
  //     if (step === 'null') {
  //       step = null
  //       steps2.push(step)
  //     } else {
  //       steps2.push(step)
  //     }
  //   })
  // }

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
    if (currentSequence.poly0Steps.length === 15) {
      setDisableAdd(true)
    }
   if (currentSequence.poly0Steps.length < 16) {
      setDisableRemove(false)
    }
  }
  const handleRemoveStep = () => {
    dispatch(removeStep())
    console.log(currentSequence)
    if (currentSequence.poly0Steps.length < 17) {
      setDisableAdd(false)
    }
    if (currentSequence.poly0Steps.length === 2) {
      setDisableRemove(true)
    }
  }





  return (
    <>
    {currentSequence ? <>
      <Track steps={steps} volume={monoVolume} onStepPlay={(step, index) => {
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

      {currentSequence.poly0Steps.map((step, index) => {
        return (
          <>
          <PolyBeast0Step
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
export default PolyBeast0;
