import React, {useState} from 'react';
import { Song, Track, Instrument, Effect } from 'reactronica';
import * as Tone from 'tone'
import { Player, Buffer } from 'tone'


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

// const synth1 = new Tone.MembraneSynth().toDestination()
// const now = Tone.now()
// synth1.triggerAttackRelease("C4", "8n", now)
// synth1.triggerAttackRelease("E4", "8n", now + 0.5)
// synth1.triggerAttackRelease("G4", "8n", now + 1)

// synth1.connect(gain2)



const Test2 = () => {
    const [notes, setNotes] = useState(null);
    const [osc1Freq, setOsc1Freq] = useState(osc1.frequency.value)

    const changeOsc1Freq = (e) => {
        let {value} = e.target; // this is destructing the e.target.value
        setOsc1Freq(value);        // this is so every time we use slider, it changes the state
        osc1.frequency.value = value; // pulled value off to assign a value to freq
    }




    const playSynth = () => {
        let synth = new Tone.MembraneSynth().toDestination();
        synth.triggerAttackRelease("C2", "8n")
    }

  let synth = new Tone.Synth({ oscillator: { type: "square8" } }).toDestination()
  let pluck = new Tone.PluckSynth().toDestination()

 const playNote = (note) => {
   console.log(note)
   synth.triggerAttackRelease(note, "16n")
 }

    const playPluck = (note) => {
    pluck.triggerAttackRelease(note, "16n")
    }


 const handleNoteChange = () => {

 }



    // for the value of the freq range slider, its not responding like a state would.

    return (
        <>
        <button onClick={playSynth}>Play</button>
        <button onClick={() => osc1.stop()}>Stop</button>
        {/* <button onClick={() => synth1.start()}>Synth Start</button> */}
        {/* <button onClick={() => synth1.stop()}>Synth Stop</button> */}
        <input type="range" id="frequency" onChange={changeOsc1Freq}
        value={osc1Freq} max="5000"/>
        <button onClick></button>

        <button
            // onMouseDown={() => setNotes([{ name: 'C3' }])}
            // onMouseUp={() => setNotes(null)}
        >
            Kick
        </button>
        {/* ...other pads */}
        <br />
    <div onClick={() => {playNote('C5')}} className='step dark'>
    <br/>
    <select onChange={handleNoteChange}>
      <option value='C4'>C4</option>
      <option value='E4'>E4</option>
      <option value='G4'>G4</option>
      <option value='A4'>A4</option>
    </select>
    </div>
    <button onClick={() => {playPluck('C5')}}>Pluck</button>

  
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
