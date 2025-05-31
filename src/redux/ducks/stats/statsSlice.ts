import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { statsApi } from '../../../apis/apis';
import { Stats } from '../../../apis/apiTypes';
import { StatsState } from './statsTypes';
import { ERROR_MSG } from '../../../constants';

const initialState: StatsState = {
    stats: null,
    loading: false,
    error: null,
};

export const fetchStats = createAsyncThunk('stats/fetchStats', async () => {
    const data = await statsApi();
    return data;
});

const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchStats.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchStats.fulfilled, (state, action: PayloadAction<Stats>) => {
          state.loading = false;
          state.stats = action.payload;
        })
        .addCase(fetchStats.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message ?? `${ERROR_MSG} fetch stats`;
        });
    },
});

export default statsSlice.reducer;
  