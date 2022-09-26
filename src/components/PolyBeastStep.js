import {useState} from 'react';
import { Song, Track, Instrument, Effect } from 'reactronica';

const PolyBeastStep = (props) => {
  const [active, setActive] = useState(false)

  const handleActivateStep = () => {
    setActive(!active)
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
