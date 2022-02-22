
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  character: [],
  status: '',
  favorites:[]
}



const slice = createSlice({
  name: 'character',
  initialState,
  reducers: {
   AddFavorite: (state,action) => {state.favorites = action.payload},

   RemoveFavorite:(state,action)=>{delete state.favorites}
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
 
export const { AddFavorite,RemoveFavorite } = slice.actions

export default slice.reducer
const axios = require('axios');


// Thunk function

export const ApiCall = createAsyncThunk('character/FetchTodos', async() =>{

  const response = await axios.get('https://rickandmortyapi.com/api/character')

  return response.data.results
})








