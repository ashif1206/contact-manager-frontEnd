import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const createContact = createAsyncThunk("Create/contact",async({name,email,phoneNumber},{rejectWithValue})=>{
    try{

        const {data} = await axios.post(`http://localhost:5000/api/v1/contacts`,{name,email,phoneNumber});
        return data;

    }catch(e){
        return rejectWithValue(e.response?.data || "An Error occured")
    }
});

export const getContact = createAsyncThunk("get/contact",async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/v1/contacts");
      console.log(data)
      return data;
    } catch (e) {
      return rejectWithValue(e.response?.data || "An Error occurred");
    }
  }
);

const contactSlice = createSlice({
  name: "Contact",
  initialState: {
    contact: [],
    success: false,
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(getContact.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    b.addCase(getContact.fulfilled, (state, action) => {
      state.contact = action.payload.AllData;
      state.loading = false;
    });
    b.addCase(getContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

       b.addCase(createContact.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      b.addCase(createContact.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.contact.push(action.payload.Data)  
       
      })
      b.addCase(createContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || action.payload;
        state.success = false;
      });
  },
});

export default contactSlice.reducer;
