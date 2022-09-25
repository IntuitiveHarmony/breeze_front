import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '',
  name: '',
  tempo: ''
}

const currentSequenceSlice = createSlice({
  name: 'currentSequence',
  initialState,
  reducers: {
    loadCurrentSequence: {
      reducer(state, action) {
        state.currentsequence.push(action.payload)
      }
    }
  }
})

export default currentSequenceSlice.reducer
