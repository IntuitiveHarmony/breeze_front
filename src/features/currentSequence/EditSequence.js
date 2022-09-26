import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { selectSequenceById, updateSequence } from '../sequences/sequencesSlice'
import { selectAllSequences } from '../sequences/sequencesSlice'
import { selectCurrentSequence, changeName } from '../currentSequence/currentSequenceSlice'


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


    return (
      <details>
        <summary>Update Current</summary>
          <form onSubmit=''>
            <label htmlFor="name">Update Name: </label>
            <input type='text' name='name' defaultValue={sequenceName} onChange={handleUpdateName} />
            <br/>
            <input type="submit"/>
          </form>
      </details>
    )
}

export default EditSequenceForm
