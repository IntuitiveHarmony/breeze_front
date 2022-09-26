import {useState} from 'react';
import { useDispatch } from 'react-redux'
import { Song, Track, Instrument, Effect } from 'reactronica';
import { updateStep } from '../features/currentSequence/currentSequenceSlice'

const PolyBeastStep = (props) => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)

  const handleActivateStep = () => {
    setActive(!active)
    dispatch(updateStep(props.index))
    console.log('update' + props.index)
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
          <div className='synthStep active' onClick={() => handleActivateStep()}>
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
