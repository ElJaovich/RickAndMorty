
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  character: [],
  status: ''
}



const slice = createSlice({
  name: 'character',
  initialState,
  reducers: {
   //FetchTodos: (state) => console.log('state')
  },
  extraReducers:(builder) => {
    builder
    .addCase(ApiCall.pending, (state, action) => {
        state.status = 'loading'
        
      })
    .addCase(ApiCall.fulfilled, (state, action) => {
     
        state.character = action.payload
        
        state.status = 'Ready'
        
      })
      .addCase(ApiCall.rejected, (state, action) => {
        console.log('some error')

        state.status = 'Error :/'
      })
  },
})
 
export const { FetchTodos } = slice.actions

export default slice.reducer
const axios = require('axios');


// Thunk function

export const ApiCall = createAsyncThunk('character/FetchTodos', async() =>{

  const response = await axios.get('https://rickandmortyapi.com/api/character')

  return response.data.results
})








