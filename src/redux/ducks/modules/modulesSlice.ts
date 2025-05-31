import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { modulesApi } from '../../../apis/apis';
import { ModuleState } from './modulesTypes';
import { Module } from '../../../apis/apiTypes';
import { ERROR_MSG } from '../../../constants';

const initialState: ModuleState = {
    modules: [],
    loading: false,
    error: null,
};

export const fetchModules = createAsyncThunk('modules/fetchModules', async () => {
    const data = await modulesApi();
    return data;
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
          state.error = action.error.message ?? `${ERROR_MSG} modules`;
        });
    },
  });
  
export default moduleSlice.reducer
