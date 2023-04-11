import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const baseUrl = 'http://localhost:5000/'

const getCarsUrl = `${baseUrl}cars`
const getEngines = `${baseUrl}engines/`

export const fetchCars = createAsyncThunk(
    'fetchCars',
    async()=>{
        const response = await fetch(getCarsUrl);
        const data = await response.json();
        return data;
    }
)

export const fetchEngines = createAsyncThunk(
    'fetchEngines',
    async(id)=>{
        const response = await fetch(getEngines+id);
        const data = await response.json();
        return data;
    }
)



export const ReduxSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    engines:[],
    isLoading: false,
    isError:false,
    price: 0,
  },
  reducers: {
    increasePrice(state, amount){
        const {payload} = amount;
        if(isNaN(payload)) return;
        state.price += payload;
    },
    decreasePrice(state, amount){
        const {payload} = amount;
        if(isNaN(payload)) return;
        state.price -= payload;
    },
    setPrice(state, amount){
        const {payload} = amount;
        if(isNaN(payload)) return;
        state.price = payload;
    }
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchCars.pending, (state, action)=>{
        state.isLoading = true;
    })
    builder.addCase(fetchCars.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.cars = action.payload;
    })
    builder.addCase(fetchCars.rejected, (state, action)=>{
        console.error("Cars Data Error ", action.payload);
        state.isLoading = false;
    })

    builder.addCase(fetchEngines.pending, (state, action)=>{
        state.isLoading = true;
    })
    builder.addCase(fetchEngines.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.engines = action.payload;
    })
    builder.addCase(fetchEngines.rejected, (state, action)=>{
        console.error("Engine Data Error ", action.payload);
        state.isLoading = false;
    })
  }
})

export const { increasePrice, decreasePrice, setPrice } = ReduxSlice.actions

export default ReduxSlice.reducer