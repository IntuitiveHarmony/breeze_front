import { useSelector, useDispatch } from 'react-redux'
import {  selectAllSequences,
          getSequencesStatus,
          getSequencesError,
          fetchSequences } from './sequencesSlice'
import { setCurrentSequence, loadCurrentSequence } from '../currentSequence/currentSequenceSlice'
import { useEffect } from 'react'
import SequencesExcerpt from './SequencesExcerpt'

import React from 'react'

const SequencesList = () => {
  const dispatch = useDispatch()

  const sequences = useSelector(selectAllSequences)
  const sequencesStatus = useSelector(getSequencesStatus)
  const error = useSelector(getSequencesError)

  useEffect(() => {
    if (sequencesStatus === 'idle') {
      dispatch(fetchSequences())
    }
  }, [sequencesStatus, dispatch])

//-----------------------------------------------
//  SET THE CURRENT SEQUENCE
//-----------------------------------------------
  const handleSelect = (e) => {
    for (let i = 0; i < sequences.length; i++) {
      if (sequences[i].id == e.target.value) {
        console.log(sequences[i])
        dispatch(loadCurrentSequence(sequences[i])) // eventually this will set the global current sequence state
      }
    }
  }

  let content
  if (sequencesStatus == 'loading') {
    content = <p>Connecting to Sequences...</p>
  } else if (sequencesStatus == 'succeeded') {
    content =
    <>
      <label>Restore Previous  </label>
      <select onChange={handleSelect}>
        <option disabled='true'>Select Sequence</option>
        {sequences.map((sequence, index) => {
          return (
            <>
              <SequencesExcerpt key={index} sequence={sequence}/>
            </>
          )
        })}
      </select>
    </>
  } else if (sequencesStatus == 'failed') {
    content = <p>{error}</p>
  }
  // const renderedSequences = sequences.map((sequence) => (
  //
  // ))

  return (
      <div>
        {content}
      </div>
  )
}

export default SequencesList
