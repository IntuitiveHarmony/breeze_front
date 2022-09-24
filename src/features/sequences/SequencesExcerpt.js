import React from 'react'

const SequencesExcerpt = ( props ) => {
    return (
      <article>
      <h3>{props.sequence.name}</h3>
      <p>Tempo: {props.sequence.tempo}</p>
      </article>
    )
}

export default SequencesExcerpt
