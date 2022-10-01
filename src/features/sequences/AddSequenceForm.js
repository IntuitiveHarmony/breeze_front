import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { addNewSequence } from './sequencesSlice'

const AddSequenceForm = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [tempo, setTempo] = useState('')
  const [initial, setInitial] = useState ({
    name: '',
    tempo: '',
    polyCsSteps: [],
    polyCsSynth: '',
    polyCsVolume: '',
    polyCsFilter: '',
    polyCsDist: '',
    polyCsReverb: '',
    polyCsDelay: ''

  })
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const onNameChanged = e => setName(e.target.value)
  const onTempoChanged = e => setTempo(e.target.value)

  const canSave = Boolean(name) && addRequestStatus === 'idle'

  const handleAddNewSequence = () => {
    if (canSave) {
      try {
        setAddRequestStatus('Pending')
        dispatch(addNewSequence(initial)).unwrap()

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
          <details className="seq-container">
            <summary className="create-seq">Create New Sequence</summary>
              <form>
                <label htmlFor='sequenceName'>Sequence Name: </label>
                <input
                  type='text'
                  id='sequenceName'
                  name='sequenceName'
                  value={name}
                  onChange={onNameChanged}
                /><br/>
                <label htmlFor='sequenceTempo'>Tempo: </label>
                <input
                  type='text'
                  id='sequenceTempo'
                  name='sequenceTempo'
                  value={tempo}
                  onChange={onTempoChanged}
                /><br/>
                <button
                  type='button'
                  onClick={handleAddNewSequence}
                >Create New Sequence</button>
              </form>
          </details>

        </div>
      </>
    )
}

export default AddSequenceForm
