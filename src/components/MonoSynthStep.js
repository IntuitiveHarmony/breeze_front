import {useState} from 'react';
import { Song, Track, Instrument, Effect } from 'reactronica';

const MonoSynthStep = (props) => {
  const [active, setActive] = useState(false)

  const handleActivateStep = () => {
    setActive(!active)
  }


  return (
    <>
    {active ?
        props.playHead === props.index ?
        <div className='synthStep playHead active' onClick={() => handleActivateStep()}>
          <p>{props.step.name}</p>
        </div>
        :
        <div className='synthStep active' onClick={() => handleActivateStep()}>
          <p>{props.step.name}</p>
        </div>
      :
        props.playHead === props.index ?
          <div className='synthStep playHead ' onClick={() => handleActivateStep()}>
            <p>{props.step.name}</p>
          </div>
          :
          <div className='synthStep ' onClick={() => handleActivateStep()}>
            <p>{props.step.name}</p>
          </div> }
    </>
  )
}
export default MonoSynthStep;
