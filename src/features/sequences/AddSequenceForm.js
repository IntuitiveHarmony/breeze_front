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
    poly0Steps: ['d'],
    poly0Delay: 0,
    poly0Dist: 0,
    poly0Filter: 0,
    poly0Reverb: 0,
    poly0Synth: '',
    poly0Volume: 0,
    poly1Steps: ['d'],
    poly1Delay: 0,
    poly1Dist: 0,
    poly1Filter: 0,
    poly1Reverb: 0,
    poly1Synth: '',
    poly1Volume: 0,
    poly2Steps: ['d'],
    poly2Delay: 0,
    poly2Dist: 0,
    poly2Filter: 0,
    poly2Reverb: 0,
    poly2Synth: '',
    poly2Volume: 0

  })
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const onNameChanged = (e) => {
    setInitial({...initial, [e.target.name]: e.target.value})
  }
  const onTempoChanged = (e) => {
    setInitial({...initial, [e.target.name]: e.target.value})
  }

  const canSave = Boolean(name) && addRequestStatus === 'idle'

  const handleAddNewSequence = () => {
    console.log(initial)
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
          <details>
            <summary>Create New Sequence</summary>
              <form>
                <label htmlFor='sequenceName'>Sequence Name: </label>
                <input
                  type='text'
                  id='sequenceName'
                  name='name'
                  onChange={onNameChanged}
                /><br/>
                <label htmlFor='sequenceTempo'>Tempo: </label>
                <input
                  type='text'
                  id='sequenceTempo'
                  name='tempo'
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
