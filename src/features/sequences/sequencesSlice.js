import { createSlice, nanoid, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


const SEQUENCES_URL = 'https://breeze-back.herokuapp.com/api/sequences'


export const fetchSequences = createAsyncThunk('sequences/fetchSequences', async () => {
  try {
    const response = await axios.get(SEQUENCES_URL)
    return console.log(response.data)
  } catch (err) {
    return err.message
  }
})
