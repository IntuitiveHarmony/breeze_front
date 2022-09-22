import {useState} from 'react';
import * as Tone from 'tone'

const Synth = () => {
  let synth = new Tone.Synth({ oscillator: { type: "square8" } }).toDestination()

 const playNote = (note) => {
   console.log(note)
   synth.triggerAttackRelease(note, "16n")
 }
 const handleNoteChange = () => {

 }

  return (
    <div onClick={() => {playNote('C5')}} className='step dark'>
    <br/>
    <select onChange={handleNoteChange}>
      <option value='C4'>C4</option>
      <option value='E4'>E4</option>
      <option value='G4'>G4</option>
      <option value='A4'>A4</option>
    </select>
    </div>
  )
}
export default Synth;
