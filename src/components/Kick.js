import {useState} from 'react';
import { Song, Track, Instrument, Effect } from 'reactronica';
import MonoSynthStep from './MonoSynthStep'



const Kick = () => {
    const [steps, setSteps] = useState([
        {name: 'C3'}, {name: 'A3'}, {name: 'C#5'}, {name: 'C3'}, {name: 'C3'}, {name: 'C3'}, {name: 'C3'}, {name: 'C3'}
    ])
    const [notes, setNotes] = useState(null)
    const [playHead, setPlayHead] = useState(0)
    const [monoVolume, setMonoVolume] = useState(-10)

    const [sound, setSound] = useState({
        name: "kick1",
			sound: require("./sounds/kick10.mp3"),
			key: "F",
            instrument: "F - kick"
    })

    



  return (
    <>
        <Track steps={steps} volume={monoVolume} onStepPlay={(step, index) => {
            setPlayHead(index)
            console.log(step, index);
        }}>
        <Instrument type="sampler" notes={notes} samples={{
                C3: './sounds/kick10.mp3',
            }} />
        </Track>
        <div className='synthGrid'>
            <p>Kick:</p>
            <br />
            {steps.map((step, index) => {
                return (
                    <MonoSynthStep index={index} step={step} playHead={playHead}/>
                )
            })}
        </div>
    </>
  )
}

export default Kick
