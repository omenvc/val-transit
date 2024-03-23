import { createSlice } from '@reduxjs/toolkit'


const initialState ={
    origin :null,
    destination: null,
    travelTimeInformation:null,
}



export const navSlice = createSlice({
    name: 'nav',
    initialState,

  reducers: {
    setOrigin:(state,action) => {
        state.origin = action.payload;
    },
    setDestination:(state,action) => {
        state.Destination = action.payload;
    },
    setTravelTimeInformation:(state,action) => {
        state.TravelTimeInformation = action.payload;
    },
  },
})
export const {setOrigin, setDestination,setTravelTimeInformation} = navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestinatin = (state) => state.nav.origin;
export const selectTravelTimeInformation = (state) => state.nav.origin;
export default navSlice.reducer

