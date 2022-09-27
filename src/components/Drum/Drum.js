import {useState, useEffect} from 'react'
// import Tone from 'tone'

const Drum = (props) => {
    const [playing, setPlaying] = useState(false);

    const play = () => {
        setPlaying(true);

        new Audio(props.sound).play()

        setTimeout(() => {
            setPlaying(false);
        }, 1);
    };

    useEffect(() => {
		document.addEventListener("keydown", (e) => {
			if (e.key.toLowerCase() === props.letter.toLowerCase()) {
				play();
			}
		});
	}, []);

  return (
    <div className={`${playing ? "playing" : ""} `} onClick={play}>
		  <div className="key">{props.instrument}</div>
	  </div>
  )
}

export default Drum