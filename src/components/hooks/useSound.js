import { useState, useEffect, useCallback } from 'react'

const useSound = (soundFilePath) => {
    const [sound, setSound] = useState({ play: () => { } })
    const [playing, setPlaying] = useState(false)
    const play = useCallback(() => sound.play(), [sound])

    // const play = () => {
    //     setPlaying(true);

    //     new Audio(sound).play()

    //     setTimeout(() => {
    //         setPlaying(false);
    //     }, 1);
    // };

    useEffect(() => {
        setSound(new Audio(soundFilePath))
    }, [soundFilePath])

    return [play]
}

export default useSound