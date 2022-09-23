import {useState} from 'react';
import { Song, Track, Instrument, Effect } from 'reactronica';

const MonoSynthStep = (props) => {

  return (
    <>
    {props.playHead === props.index ?
      <div className='synthStep active'>
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
