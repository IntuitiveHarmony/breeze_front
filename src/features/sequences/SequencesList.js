import { useSelector, useDispatch } from 'react-redux'
import {  selectAllSequences,
          getSequencesStatus,
          getSequencesError,
          fetchSequences } from './sequencesSlice'
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

  let content
  if (sequencesStatus == 'loading') {
    content = <p>Connecting to Sequences...</p>
  } else if (sequencesStatus == 'succeeded') {
    content =
    <>
      <label>Restore Previous  </label>
      <select>
        <option disabled='true'>Select Sequence</option>
        {sequences.map((sequence, index) => {
          return (
            <>
              <SequencesExcerpt sequence={sequence}/>
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
