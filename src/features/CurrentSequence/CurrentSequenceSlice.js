import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'


const SEQUENCES_URL = 'https://breeze-back.herokuapp.com/api/sequences'


const initialState = {
  id: '',
  name: '',
  tempo: ''
}


//This will be the edit sequence eventually.  i think
// export const updateSequence = createAsyncThunk('currentSequence/editSequence', async (editedSequence) => {
//   try {
//     const response = await axios.post(SEQUENCES_URL, editedSequence)
//     return response.data
//   } catch (err) {
//     return err.message
//   }
// })

// export const setCurrentSequence = (currentSequence) => {
//   dispatch(loadCurrentSequence(currentSequence))
// }

const currentSequenceSlice = createSlice({
  name: 'currentSequence',
  initialState,
  reducers: {
    loadCurrentSequence: {
      reducer(state, action) {
        console.log('sweet')
        state.currentSequence.push(action.payload)
      }
    }
  }
})

export const selectCurrentSequence = (state) => state.currentSequence.currentSequence

export const { loadCurrentSequence } = currentSequenceSlice.actions

export default currentSequenceSlice.reducer
