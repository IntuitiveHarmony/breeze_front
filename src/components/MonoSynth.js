import {useState} from 'react';
import { Song, Track, Instrument } from 'reactronica';



const MonoSynth = () => {
  const [steps, setSteps] = useState(['C3', 'E3', null, 'E3','C3', 'E3', 'B2', 'E3'])
  const [isPlaying, setIsPLaying] = useState(false)


  const play = () => {
    setIsPLaying(!isPlaying)
  }

  return (
    <>
    <Song isPlaying={isPlaying}>
      <Track steps={steps}>
        <Instrument type='synth' />
      </Track>
      <button onClick={() => play()}>Play</button>
    </Song>
    </>
  )
}
export default MonoSynth;
