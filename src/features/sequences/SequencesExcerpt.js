import React from 'react'

const SequencesExcerpt = ( {sequence} ) => {
    return (
      <article>
        <h3>{sequence.name}</h3>
        <p>{sequence.tempo}</p>
      </article>
    )
}

export default SequencesExcerpt
