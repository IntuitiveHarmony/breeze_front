import { createSlice, nanoid, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


const SEQUENCES_URL = 'https://breeze-back.herokuapp.com/api/sequences'


const initialState =[
  {id: 1, name: 'Learning Redux', tempo: 2},
  {id: 2, name: 'Tutorial', tempo: 5}
]


const sequencesSlice = createSlice({
  name: 'sequences',
  initialState,
  reducers: {
    sequenceAdded(state, action) {
    //  within slice we can mutate state cuz something else is going on under the hood (immer.js)
      state.push(action.payload)
    }
  }
})

export const fetchSequences = createAsyncThunk('sequences/fetchSequences', async () => {
  try {
    const response = await axios.get(SEQUENCES_URL)
    return console.log(response.data)
  } catch (err) {
    return err.message
  }
})

export const selectAllSequences = (state) => state.sequences

export const { sequenceAdded } = sequencesSlice.actions

export default sequencesSlice.reducer
