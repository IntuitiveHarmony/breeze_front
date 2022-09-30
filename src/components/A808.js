import React, { useState, useEffect } from 'react'
import ToolBar from './808/Toolbar'
import Steps from './808/Steps'
import TrackList from './808/TrackList'
import PlayHead from './808/PlayHead'
import { Provider } from './hooks/useStore'
import useTimer from './hooks/useTimer.js'
import useStyles from './hooks/useStyles'
import './A808.css'

function A808() {

    const baseBPMPerOneSecond = 60
    const stepsPerBar = 8
    const beatsPerBar = 4
    const barsPerSequence = 2
    const totalSteps = stepsPerBar * barsPerSequence
    const totalBeats = beatsPerBar * barsPerSequence

    const [bpm, setBPM] = useState(120)
    const [startTime, setStartTime] = useState(null)
    const [pastLapsedTime, setPastLapse] = useState(0)
    const [currentStepID, setCurrentStep] = useState(null)
    const [getNotesAreaWidthInPixels] = useStyles(totalSteps)

    const notesAreaWidthInPixels = getNotesAreaWidthInPixels(totalSteps)
    const timePerSequence = baseBPMPerOneSecond / bpm * 1000 * totalBeats
    const timePerStep = timePerSequence / totalSteps
    const isSequencePlaying = startTime !== null
    const playerTime = useTimer(isSequencePlaying)
    const lapsedTime = isSequencePlaying ? Math.max(0, playerTime - startTime) : 0
    const totalLapsedTime = pastLapsedTime + lapsedTime

    useEffect(() => {
        if (isSequencePlaying) {
            setCurrentStep(Math.floor(totalLapsedTime / timePerStep) % totalSteps)
        } else {
            setCurrentStep(null)
        }
    }, [isSequencePlaying, timePerStep, totalLapsedTime, totalSteps])

    const toolBarProps = {
        setStartTime,
        setPastLapse,
        setBPM,
        isSequencePlaying,
        startTime,
        bpm
    }

    const playHeadProps = {
        notesAreaWidthInPixels,
        timePerSequence,
        totalLapsedTime
    }

    const trackListProps = {
        currentStepID
    }

    return (
        <div>
        <Provider>
            <main className="app">
                <header className="app_header">
                    <h1 className="app_title">REACT-808</h1>
                    <ToolBar {...toolBarProps} />
                </header>
                <Steps count={totalSteps} />
                <div className="app_content">
                    <PlayHead {...playHeadProps} />
                    <TrackList {...trackListProps} />
                </div>
                <footer className="app_footer">
                    Source code on <a href="https://github.com/joeshub/react-808">on Github</a>, Built by <a href="http://seifi.org/">Joe Seifi</a> using React.js
                </footer>
            </main >
        </Provider>
        </div>
    )
}

export default A808;