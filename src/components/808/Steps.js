import React from 'react'
import './Steps.css'
import { sequenceList } from '../constants/config'

const Steps = ({ count = 0 }) => {
    let content = [...Array(count)].map((el, i) => 
        <div className="step-drum" key={i + 1}>{i + 1}</div>)


    return (
        <div className="steps-drums">
            {content}
        </div>
    )
}

export default Steps