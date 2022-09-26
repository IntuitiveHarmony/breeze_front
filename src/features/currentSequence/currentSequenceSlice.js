import {  createSlice,
          nanoid,
          createAsyncThunk,
          combineReducers } from '@reduxjs/toolkit'
import { fetchSequences } from '../sequences/sequencesSlice'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'


const SEQUENCES_URL = 'https://breeze-back.herokuapp.com/api/sequences'


const initialState = {
  // id: '',
  // name: '',
  // tempo: ''
}


//This will be the edit sequence eventually.  i think
export const updateSequence = createAsyncThunk('currentSequence/editSequence', async (editedSequence) => {
  try {
    const response = await axios.put(`${SEQUENCES_URL}/${editedSequence.id}`, editedSequence)
    return response.data
  } catch (err) {
    return err.message
  } 
})

// export const setCurrentSequence = (currentSequence) => {
//   dispatch(loadCurrentSequence(currentSequence))
// }

const currentSequenceSlice = createSlice({
  name: 'currentSequence',
  initialState,
  reducers: {
    loadCurrentSequence: {
      reducer(state, action) {
        state.currentSequence = action.payload
      }
    },
    changeTempo: {
      reducer(state, action) {
        state.currentSequence.tempo = action.payload
      }
    },
    changeName: {
      reducer(state, action) {
        state.currentSequence.name = action.payload
      }
    }
  }
})




export const selectCurrentSequence = (state) => state.currentSequence.currentSequence

export const { loadCurrentSequence, changeTempo, changeName } = currentSequenceSlice.actions

export default currentSequenceSlice.reducer
