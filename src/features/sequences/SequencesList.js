import { useSelector } from 'react-redux'
import { selectAllSequences } from './sequencesSlice'

import React from 'react'

const SequencesList = () => {
    const sequences = useSelector(selectAllSequences)

    const renderedSequences = sequences.map((sequence) => (
      <article key={sequence.id}>
        <h3>{sequence.name}</h3>
        <p>{sequence.tempo}</p>
      </article>
    ))

    return (
        <div>
          <h2>Sequences:</h2>
          {renderedSequences}
        </div>
    )
}

export default SequencesList
