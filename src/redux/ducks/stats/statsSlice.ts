import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Stats } from './statsTypes';

type StatsState = {
    stats: Stats | null;
    loading: boolean;
    error: string | null;
};

const initialState: StatsState = {
    stats: null,
    loading: false,
    error: null,
};

export const fetchStats = createAsyncThunk('stats/fetchStats', async () => {
    const response = await axios.get<Stats>('https://www.index.hr/oglasi/mock/stats');
    return response.data;
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
          state.error = action.error.message ?? 'Failed to fetch stats';
        });
    },
});

export default statsSlice.reducer;
  