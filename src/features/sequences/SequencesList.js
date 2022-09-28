import { useSelector, useDispatch } from 'react-redux'
import {  selectAllSequences,
          getSequencesStatus,
          getSequencesError,
          fetchSequences,
          selectSequenceById, } from './sequencesSlice'
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
    //'initialize' the store
    dispatch(loadCurrentSequence({
      id: '',
      name: '',
      tempo: 100,
      polyCsSteps: [],
      polyCsDelay: 0,
      polyCsDist: 0,
      polyCsFilter: 0,
      polyCsReverb: 0,
      polyCsSynth: '',
      polyCsVolume: 0

      }))
    if (sequencesStatus === 'idle') {
      dispatch(fetchSequences())
    }
  }, [sequencesStatus, dispatch])

//-----------------------------------------------
//  SET THE CURRENT SEQUENCE IN STORE
//-----------------------------------------------
  const handleSelect = (e) => {
    for (let i = 0; i < sequences.length; i++) {
      if (sequences[i].id == e.target.value) {
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
        <option disabled={true}>Select Sequence</option>
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
