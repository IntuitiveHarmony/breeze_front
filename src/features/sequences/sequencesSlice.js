import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import { updateSequence } from '../currentSequence/currentSequenceSlice'
import { useSelector } from 'react-redux'
import axios from 'axios'

const SEQUENCES_URL = 'https://breeze-back.herokuapp.com/api/sequences'



const initialState = {
  sequences: [],
  status: 'idle',
  error: null
}


//-----------------------------------------------
//     GET SEQUENCES FROM OUR DATA BASE
//-----------------------------------------------
export const fetchSequences = createAsyncThunk('sequences/fetchSequences', async () => {
  try {
    const response = await axios.get(SEQUENCES_URL)
    return response.data
  } catch (err) {
    return err.message
  }
})

//-----------------------------------------------
//     ADD NEW SEQUENCE TO OUR DATA BASE
//-----------------------------------------------
export const addNewSequence = createAsyncThunk('sequences/addNewSequence', async (initialSequence) => {
  try {
    const response = await axios.post(SEQUENCES_URL, initialSequence)
    return response.data
  } catch (err) {
    return err.messasge
  }
})

//-----------------------------------------------
//     DELETE SEQUENCE FROM OUR DATA BASE
//-----------------------------------------------
export const deleteSequence = createAsyncThunk('currentSequence/deletedSequence', async (deletedSequence) => {
  try {
    const response = await axios.delete(`${SEQUENCES_URL}/${deletedSequence.id}`)
    return response.data
  } catch (err) {
    return err.message
  }
})

const sequencesSlice = createSlice({
  name: 'sequences',
  initialState,
  reducers: {
    sequenceAdded: {
        reducer(state, action) {
          //  within slice we can mutate state cuz something else is going on under the hood (immer.js)
          state.sequences.push(action.payload)
        },
      prepare(name, tempo) {
        return {
          payload: {
            id: nanoid(),
            name,
            tempo
          }
        }
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSequences.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchSequences.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.sequences = [...action.payload]
      })
      .addCase(fetchSequences.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addNewSequence.fulfilled, (state, action)=> {
        state.sequences.push(action.payload)
      })
      .addCase(updateSequence.fulfilled, (state, action) => {
        state.sequences = [...action.payload]
      } )

  }
})


export const selectAllSequences = (state) => state.sequences.sequences
export const getSequencesStatus = (state) => state.sequences.status
export const getSequencesError = (state) => state.sequences.error

export const selectSequenceById = (state, sequenceId) =>
  state.sequences.sequences.find(sequence => sequence.id === sequenceId)

export const { sequenceAdded } = sequencesSlice.actions

export default sequencesSlice.reducer
