import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { selectSequenceById, selectAllSequences } from '../sequences/sequencesSlice'
import { selectCurrentSequence, changeName, updateSequence, unNull, fixNull } from '../currentSequence/currentSequenceSlice'


const EditSequenceForm = () => {
  const dispatch = useDispatch()
  const currentSequence = useSelector(selectCurrentSequence)

  //------------------------------------------
  //  STORE IS UNDEFINED AT PAGE LOAD
  //------------------------------------------
  let bpm
  let sequenceName
  if (currentSequence == undefined) {
    sequenceName = ''
    bpm = 100
  } else {
    sequenceName = currentSequence.name
    bpm = currentSequence.tempo
  }

  const handleUpdateName = (e) => {
    dispatch(changeName(e.target.value))
  }


  const handleUpdateSequence = () => {
      try {
        dispatch(updateSequence(currentSequence))
      } catch (err) {
        console.error('Failed to update the Sequence', err)
      }

  }

    return (
      <details>
        <summary>Update Current</summary>
            <label htmlFor="name">Update Name: </label>
            <input type='text' name='name' defaultValue={sequenceName} onChange={handleUpdateName} />
            <br/>
            <button onMouseOver={() => dispatch(unNull())} onMouseOut={() => dispatch(fixNull())} onClick={() => handleUpdateSequence()} >Update Sequence</button>
      </details>
    )
}

export default EditSequenceForm
