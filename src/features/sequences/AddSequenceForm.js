import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { sequenceAdded } from './sequencesSlice'

const AddSequenceForm = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [tempo, setTempo] = useState('')

  const onNameChanged = e => setName(e.target.value)
  const onTempoChanged = e => setTempo(e.target.value)

  const onSaveSequenceClicked = () => {
    if (name && tempo) {
      dispatch(
        sequenceAdded({
          id: nanoid(),
          name,
          tempo
        })
      )
      setName('')
      setTempo('')
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
