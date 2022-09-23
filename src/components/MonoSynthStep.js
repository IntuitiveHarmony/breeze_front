import {useState} from 'react';
import { Song, Track, Instrument, Effect } from 'reactronica';

const MonoSynthStep = (props) => {

<<<<<<< HEAD
  return (
    <>
    {props.playHead === props.index ?
      <div className='synthStep playHead'>
        <p>{props.step.name}</p>
      </div>
      :
      <div className='synthStep'>
        <p>{props.step.name}</p>
      </div> }

    </>
  )
}
export default MonoSynthStep;
=======
    return (
        <>
        {props.playHead === props.index ?
        <div className='synthStep playHead'>
            <p>{props.step.name}</p>
        </div>
        :
        <div className='synthStep'>
            <p>{props.step.name}</p>
        </div> }

        </>
    )
}
export default MonoSynthStep;
>>>>>>> bb45c3746f75224335fa734f4cbb517df42bbbfa
