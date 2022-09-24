import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { addNewSequence } from './sequencesSlice'

const AddSequenceForm = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [tempo, setTempo] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const onNameChanged = e => setName(e.target.value)
  const onTempoChanged = e => setTempo(e.target.value)

  const canSave = Boolean(name) && addRequestStatus === 'idle'

  const onSaveSequenceClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus('Pending')
        dispatch(addNewSequence({name, tempo})).unwrap()

        setName('')
        setTempo('')
      } catch (err) {
        console.error('Failed to save the Sequence', err)
      } finally {
        setAddRequestStatus('idle')
      }
    }
  }


    return (
      <>
        <div>
          <details>
            <summary>Create New Sequence</summary>
              <form>
                <label htmlFor='sequenceName'>Sequence Name: </label>
                <input
                  type='text'
                  id='sequenceName'
                  name='sequenceName'
                  value={name}
                  onChange={onNameChanged}
                />
                <label htmlFor='sequenceTempo'>Tempo Name: </label>
                <input
                  type='text'
                  id='sequenceTempo'
                  name='sequenceTempo'
                  value={tempo}
                  onChange={onTempoChanged}
                />
                <button
                  type='button'
                  onClick={onSaveSequenceClicked}
                >Save Sequence</button>
              </form>
          </details>

        </div>
      </>
    )
}

export default AddSequenceForm
