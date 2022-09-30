import {useState} from 'react';
import { Song, Track, Instrument, Effect } from 'reactronica';

const DrumPadStep = (props) => {
  const [active, setActive] = useState(false)

  const handleActivateStep = () => {
    setActive(!active)
    props.play()
  }

  const [playing, setPlaying] = useState(false);

    const play = () => {
        setPlaying(true);

        new Audio(props.sound).play()

        setTimeout(() => {
            setPlaying(false);
        }, 1);
    };



    return (
        <>
        {active ?
            props.playHead === props.index ?
            <div className='synthStep playHead active' onClick={() => handleActivateStep()} onChange={play}>
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
export default DrumPadStep;
