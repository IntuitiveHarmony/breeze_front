import React, {useState} from 'react'
import { Song, Track, Instrument } from 'reactronica';

// Simplified Piano Roll
const Piano2 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [steps, setSteps] = useState([
    ['C3', 'E3', 'A3'],
    null,
    ['C3', 'E3', 'G3', 'B3'],
    null,
    ['C3', 'F3', 'A3'],
    null,
    ['D3', 'G3', 'B3'],
    null,
  ]);

  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Stop' : 'Play'}
      </button>

      {/* <PianoRoll
        currentStepIndex={currentStepIndex}
        onClick={(steps) => setSteps(steps)}
      /> */}

      {/* Reactronica Components */}
      <Song isPlaying={isPlaying}>
        <Track
          steps={steps}
          // Callback triggers on every step
          onStepPlay={(stepNotes, index) => {
            setCurrentStepIndex(index);
          }}
        >
          <Instrument type="polySynth" />
        </Track>
      </Song>
    </>
  );
}

export default Piano2