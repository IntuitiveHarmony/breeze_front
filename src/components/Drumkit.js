import {useState} from 'react'
import Drum from './Drum/Drum'

const Drumkit = () => {
    const [sounds, setSounds] = useState([
		{
			name: "kick1",
			sound: require("./sounds/kick10.mp3"),
			key: "F",
            instrument: "F - kick"
		},
        {
            name: "snare1",
			sound: require("./sounds/snare1.mp3"),
			key: "S",
            instrument: "S - malt snare"
        },
        {
            name: "cc-hat1",
			sound: require("./sounds/closedhat1.mp3"),
			key: "K",
            instrument: "K - cc-hat1"
        },
        {
            name: "clap1",
			sound: require("./sounds/closedhat1.mp3"),
			key: "J",
            instrument: "J -clap 1"
        }

        ])

  return (
    <div>
        <h1>React Drumkit</h1>
			<div className="drums">
				{sounds.map((sound, i) => (
					<Drum key={i} letter={sound.key} sound={sound.sound} instrument={sound.instrument} />
				))}
			</div>
    </div>
  )
}

export default Drumkit