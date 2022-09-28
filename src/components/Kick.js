import {useState} from 'react';
import { Song, Track, Instrument, Effect } from 'reactronica';
import MonoSynthStep from './MonoSynthStep'
import DrumPadStep from './DrumPadStep'


const Kick = () => {
    const [steps, setSteps] = useState([
        {name: 'C3'}, {name: 'A3'}, {name: 'C#5'}, {name: 'C3'}, {name: 'C3'}, {name: 'C3'}, {name: 'C3'}, {name: 'C3'}
    ])
    const [notes, setNotes] = useState(null)
    const [playHead, setPlayHead] = useState(0)
    const [monoVolume, setMonoVolume] = useState(-10)
    const [active, setActive] = useState(false)
    

    const [sound, setSound] = useState({
        name: "kick1",
			sound: require("./sounds/kick10.wav"),
			key: "F",
            instrument: "F - kick"
    })

    const [playing, setPlaying] = useState(false);

    const play = () => {
        setPlaying(true);
        setActive(true);

        new Audio(sound.sound).play()

        setTimeout(() => {
            setPlaying(false);
        }, 1);
    };



  return (
    <>
        <Track steps={steps} volume={monoVolume} onStepPlay={(step, index) => {
            setPlayHead(index)
            console.log(step, index);
            }}>
            <Instrument type='duoSynth' />
        </Track>
        <div className='synthGrid'>
            <p>Kick:</p>
            <br />
            {steps.map((step, index) => {
                return (
                    <DrumPadStep sound={sound.sound} index={index} step={step} playHead={playHead} play={play}/>
                )
            })}
        </div>
    </>
  )
}

export default Kick
