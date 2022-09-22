import React, {useState} from 'react';
import { Song, Track, Instrument, Effect } from 'reactronica';
import * as Tone from 'tone'


// testing audio///////
let actx = new AudioContext();
let out = actx.destination;

let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
let gain2 = actx.createGain();

osc1.connect(gain1);
gain1.connect(out);
gain2.connect(out);
////////////////////////


const Test2 = () => {
    const [notes, setNotes] = React.useState(null);
    const [osc1Freq, setOsc1Freq] = React.useState(osc1.frequency.value)

    const changeOsc1Freq = (e) => {
        let {value} = e.target; // this is destructing the e.target.value
        setOsc1Freq(value);        // this is so every time we use slider, it changes the state
        osc1.frequency.value = value; // pulled value off to assign a value to freq
    }




    const playSynth = () => {
        let synth = new Tone.MembraneSynth.toDestination();
        synth.triggerAttackRelease("C2", "8n")
    }

    let loopBeat;

    const setupLoop = (e) => {
        let bassSynth = new Tone.MembraneSynth().toDestination()

        loopBeat = new Tone.Loop(song, '4n');
        Tone.Transport.start();
        loopBeat.start(0);
    }

    const song = (time) => {
        console.log(song);
    }

    // for the value of the freq range slider, its not responding like a state would.

    return (
        <>
        <button onClick={playSynth}>Play</button>
        <button onClick={() => osc1.stop()}>Stop</button>
        <input type="range" id="frequency" onChange={changeOsc1Freq}
        value={osc1Freq} max="5000"
        />
        <button
            onMouseDown={() => setNotes([{ name: 'C3' }])}
            onMouseUp={() => setNotes(null)}
        >
            Kick
        </button>
        {/* ...other pads */}

        {/* Reactronica Components */}
        <Song>
          <Track>
            <Instrument
              type="sampler"
              notes={notes}
              samples={{
                C3: '/drums/kick.wav',
                D3: '/drums/snare.wav',
                E3: '/drums/hat.wav',
              }}
              onLoad={(buffers) => {
                // Runs when all samples are loaded
              }}
            />
          </Track>
        </Song>
      </>
    );
  };

export default Test2
