import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { selectSequenceById, updateSequence } from '../sequences/sequencesSlice'
import { selectAllSequences } from '../sequences/sequencesSlice'


const EditSequenceForm = () => {



    return (
      <details>
        <summary>Update Current</summary>
          <form onSubmit=''>
            <label htmlFor="name">Update Name: </label>
            <input type='text' name='name' defaultValue='Current sequence name...' onChange='' />
            <br/>
            <input type="submit"/>
          </form>
      </details>
    )
}

export default EditSequenceForm
