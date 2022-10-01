import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { addNewSequence, selectAllSequences } from './sequencesSlice'
import { loadCurrentSequence } from '../currentSequence/currentSequenceSlice'



const AddSequenceForm = () => {
  const allSequences = useSelector(selectAllSequences)

  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [tempo, setTempo] = useState('')
  const [initial, setInitial] = useState ({
    name: '',
    tempo: 0,
    poly0Steps: ['null','null','null','null','null','null','null','null'],
    poly0Delay: 0,
    poly0Dist: 0,
    poly0Filter: 0,
    poly0Reverb: 0,
    poly0Synth: 'membraneSynth',
    poly0Volume: 0,
    poly1Steps: ['null','null','null','null','null','null','null','null'],
    poly1Delay: 0,
    poly1Dist: 0,
    poly1Filter: 0,
    poly1Reverb: 0,
    poly1Synth: 'membraneSynth',
    poly1Volume: 0,
    poly2Steps: ['null','null','null','null','null','null','null','null'],
    poly2Delay: 0,
    poly2Dist: 0,
    poly2Filter: 0,
    poly2Reverb: 0,
    poly2Synth: 'membraneSynth',
    poly2Volume: 0

  })
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const onNameChanged = (e) => {
    setInitial({...initial, [e.target.name]: e.target.value})
  }
  const onTempoChanged = (e) => {
    setInitial({...initial, [e.target.name]: Number(e.target.value)})
  }


  const handleAddNewSequence = () => {
      console.log(initial)
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
