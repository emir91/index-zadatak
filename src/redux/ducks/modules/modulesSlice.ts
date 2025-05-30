import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Module } from './modulesTypes';

interface ModuleState {
    modules: Module[];
    loading: boolean;
    error: string | null;
}

const initialState: ModuleState = {
    modules: [],
    loading: false,
    error: null,
};

export const fetchModules = createAsyncThunk('modules/fetchModules', async () => {
    const response = await axios.get<Module[]>('https://www.index.hr/oglasi/mock/modules');
    return response.data;
});

const moduleSlice = createSlice({
    name: 'modules',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchModules.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchModules.fulfilled, (state, action: PayloadAction<Module[]>) => {
          state.loading = false;
          state.modules = action.payload;
        })
        .addCase(fetchModules.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message ?? 'Failed to fetch modules';
        });
    },
  });
  
export default moduleSlice.reducer
