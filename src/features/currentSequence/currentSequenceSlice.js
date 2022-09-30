import {  createSlice,
          nanoid,
          createAsyncThunk,
          combineReducers,
          useContext,
          createContext } from '@reduxjs/toolkit'
import { fetchSequences } from '../sequences/sequencesSlice'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'


const SEQUENCES_URL = 'https://breeze-back.herokuapp.com/api/sequences'


const initialState = {


}

// const Context = createContext({
//   drumSequence: {},
//   toggleNote: () => { },
//   selectSequence: () => { },
// })



//-----------------------------------------------
//  EDIT CURRENT SEQUENCE IN DATABASE
//-----------------------------------------------
export const updateSequence = createAsyncThunk('currentSequence/editSequence', async (editedSequence) => {
  console.log(editedSequence)
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
        state.currentSequence.poly0Steps[action.payload[0]] = action.payload[1]
        console.log(action.payload)
      }
    },
    updateStep1: {
      reducer(state, action) {
        state.currentSequence.poly1Steps[action.payload[0]] = action.payload[1]
        console.log(action.payload)
      }
    },
    updateStep2: {
      reducer(state, action) {
        state.currentSequence.poly2Steps[action.payload[0]] = action.payload[1]
        console.log(action.payload)
      }
    },
    removeStep: {
      reducer(state, action) {
        state.currentSequence.poly0Steps.pop()
      }
    },
    addStep: {
      reducer(state, action) {
        state.currentSequence.poly0Steps.push('null')
      }
    }
  }
})




export const selectCurrentSequence = (state) => state.currentSequence.currentSequence
// this will put the current state in the store

export const { loadCurrentSequence, changeTempo, changeName, updateStep, updateStep1, updateStep2,   addStep, removeStep } = currentSequenceSlice.actions

export default currentSequenceSlice.reducer
