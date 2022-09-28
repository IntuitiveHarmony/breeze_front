import {useState, useEffect} from 'react'
import * as Tone from 'tone';
import { Player } from 'tone'

    const LooperProvider = ({ children }) => {
        const [player, setPlayer] = useState(null);
        const [playing, setPlaying] = useState(false);

        
        useEffect(() => {
        const player = new Tone.Players(
            {
            BD: "/kick.wav",
            CP: "/clap.wav",
            OH: "/hh_open.wav",
            CH: "/hh_closed.wav"
            },
            () => {
            console.log("buffers loaded");
            console.log({player});
            setPlayer(player);
            }
        ).toDestination();
        }, []);
    
        return (
            <div className="">
                
            </div>
        )
    };

export default LooperProvider;
