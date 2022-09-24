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
    content = <p>'Loading...'</p>
  } else if (sequencesStatus == 'succeeded') {
    content = <p>'succeded'</p>
  } else if (sequencesStatus == 'failed') {
    content = <p>{error}</p>
  }
  // const renderedSequences = sequences.map((sequence) => (
  //
  // ))

  return (
      <div>
        <h2>Sequences:</h2>
        {content}
      </div>
  )
}

export default SequencesList
