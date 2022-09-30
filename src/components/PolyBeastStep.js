import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Song, Track, Instrument, Effect } from 'reactronica';
import { updateStep } from '../features/currentSequence/currentSequenceSlice'
import { selectCurrentSequence } from '../features/currentSequence/currentSequenceSlice'

const PolyBeastStep = (props) => {
  const dispatch = useDispatch()
  const currentSequence = useSelector(selectCurrentSequence)
  const [active, setActive] = useState(false)
  const [noteIndex, setNoteIndex] = useState([props.index, props.note])
  const [noteNull, setNoteNull] = useState([props.index, 'null'])

  const handleActivateStep = () => {
    dispatch(updateStep(noteIndex))
    // props.setSteps(currentSequence.polyCsSteps)
    console.log(currentSequence)
  }
  const handleDeactivateStep = () => {
    dispatch(updateStep(noteNull))
    // props.setSteps(currentSequence.polyCsSteps)
    console.log(currentSequence)
  }


  return (
    <>
    {currentSequence.poly0Steps[props.index] === 'null' ?
    props.playHead === props.index ?
    <>
      <div className='underStep'></div>
      <div className='synthStep playHead' onClick={() => handleActivateStep()}>
      </div>
    </>
      :
    <>
      <div className='underStep'></div>
      <div className='synthStep' onClick={() => handleActivateStep()}>
      </div>
    </>
      :
      props.playHead === props.index ?
      <>
        <div className='underStep'></div>
        <div className='synthStep playHead active' onClick={() => handleDeactivateStep()}>
        </div>
      </>
      :
      <>
        <div className='underStep'></div>
        <div className='synthStep active' onClick={() => handleDeactivateStep()}>
        </div>
      </>}
    </>
  )
}
export default PolyBeastStep;
