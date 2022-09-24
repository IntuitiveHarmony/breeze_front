import {useState} from 'react';
import * as Tone from 'tone'
import SynthPad from './SynthPad'

const Synth = () => {


    return (
        <>
        <div className='sequencerContainer'>
            <SynthPad />
            <SynthPad />

        </div>
        </>
    )
}

export default Synth;
