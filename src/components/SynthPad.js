import {useState} from 'react';
import * as Tone from 'tone'

const SynthPad = () => {
  const [note, setNote] = useState('C3')
  const [delay, setDelay] = useState(8)
  const [delayFeedback, setDelayFeedback] = useState(.5)

  const delayEffect = new Tone.FeedbackDelay(delay +'n', delayFeedback).toDestination();


  let synth = new Tone.Synth({ oscillator: { type: "square8" } }).connect(delayEffect)

 const playNote = (note) => {
   console.log(note)
   synth.triggerAttackRelease(note, "16n")
 }
 const handleNoteChange = (event) => {
   setNote(event.target.value)
 }
 const handleDelayFeedback = (event) => {
   setDelayFeedback(event.target.value)
 }
  return (
    <>
    <div onClick={() => {playNote(note)}} className='step dark'>
    <br/>
    <select onChange={handleNoteChange}>
      <option value='C3'>C3</option>
      <option value='E3'>E3</option>
      <option value='G3'>G3</option>
      <option value='A3'>A3</option>
    </select>
    </div>
    <label>Delay Feedback {delayFeedback}</label><br/>
    <input onChange={handleDelayFeedback} type='range' step='.1' min='0' max='.9' ></input>
    </>
  )
}
export default SynthPad;
