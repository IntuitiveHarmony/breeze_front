import React from 'react'

const SequencesExcerpt = ( props ) => {
    return (
      <option key={props.sequence.id} value={props.sequence.id}>{props.sequence.name} -- Tempo: {props.sequence.tempo}</option>
    )
}

export default SequencesExcerpt
// <article>
// <h3>{props.sequence.name}</h3>
// <p>Tempo: {props.sequence.tempo}</p>
// </article>
