import {useState} from 'react';
import * as Tone from 'tone'
import SynthPad from './SynthPad'
import { Song, Track, Instrument, Effect } from 'reactronica';

const Synth = () => {
  let steps = [null,null]

  return (
    <>
    <Track steps={steps} onStepPlay={(step, index) => {
          console.log('mine')
          console.log(step, index);
        }}>
        </Track>
      <div className='sequencerContainer'>
        <SynthPad />
        <SynthPad />

      </div>
    </>
  )
}
export default Synth;
