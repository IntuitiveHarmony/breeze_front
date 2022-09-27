import {  createSlice,
          nanoid,
          createAsyncThunk,
          combineReducers } from '@reduxjs/toolkit'
import { fetchSequences } from '../sequences/sequencesSlice'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'


const SEQUENCES_URL = 'https://breeze-back.herokuapp.com/api/sequences'


const initialState = {

}

//-----------------------------------------------
//  EDIT CURRENT SEQUENCE IN DATABASE
//-----------------------------------------------
export const updateSequence = createAsyncThunk('currentSequence/editSequence', async (editedSequence) => {
  try {
    const response = await axios.put(`${SEQUENCES_URL}/${editedSequence.id}`, editedSequence)
    return response.data
  } catch (err) {
    return err.message
  }
})


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
    },
    updateStep: {
      reducer(state, action) {
        state.currentSequence.polyBeastCs.steps.push(action.payload)
      }
    }
  }
})




export const selectCurrentSequence = (state) => state.currentSequence.currentSequence
// this will put the current state in the store

export const { loadCurrentSequence, changeTempo, changeName, updateStep } = currentSequenceSlice.actions

export default currentSequenceSlice.reducer
