import {useState} from 'react';
import { useDispatch } from 'react-redux'
import { Song, Track, Instrument, Effect } from 'reactronica';
import { updateStep } from '../features/currentSequence/currentSequenceSlice'

const PolyBeastStep = (props) => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)
  const [noteIndex, setNoteIndex] = useState([props.index, props.note])
  const [noteNull, setNoteNull] = useState([props.index, null])

  const handleActivateStep = () => {
    setActive(!active)
    dispatch(updateStep(noteIndex))
  }
  const handleDeactivateStep = () => {
    setActive(!active)
    dispatch(updateStep(noteNull))
  }


  return (
    <>
    {active ?
        props.playHead === props.index ?
        <>
          <div className='underStep'></div>
          <div className='synthStep playHead active' onClick={() => handleActivateStep()}>
          </div>
        </>
        :
        <>
          <div className='underStep'></div>
          <div className='synthStep active' onClick={() => handleDeactivateStep()}>
          </div>
        </>
      :
        props.playHead === props.index ?
        <>
          <div className='underStep'></div>
          <div className='synthStep playHead ' onClick={() => handleActivateStep()}>
          </div>
        </>
          :
        <>
          <div className='underStep'></div>
          <div className='synthStep' onClick={() => handleActivateStep()}>
          </div>
        </>}
    </>
  )
}
export default PolyBeastStep;
