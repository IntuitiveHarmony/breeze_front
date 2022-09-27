import { createAsyncThunk, nanoid, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentSequence } from "../currentSequence/currentSequenceSlice";
import { deleteSequence } from "./sequencesSlice";


const SEQUENCES_URL = 'https://breeze-back.herokuapp.com/api/sequences'


const DeleteSequenceForm = () => {
    const dispatch = useDispatch()
    const currentSequence = useSelector(selectCurrentSequence)

    const handleDeleteSequence = () => {
        try {
            dispatch(deleteSequence(currentSequence))
        } catch (err) {
            console.error('Failed to delete the sequence')
        }
    }

    return (
        <details>
            <summary>Delete Current</summary>
                <button onClick={() => handleDeleteSequence()} >Delete Sequence</button>
            </details>
    )
}

export default DeleteSequenceForm