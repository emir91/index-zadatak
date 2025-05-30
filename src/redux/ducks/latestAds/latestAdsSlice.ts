import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { LatestAd } from './latestAdsTypes';

type LatestAdState = {
    latestAds: LatestAd[];
    loading: boolean;
    error: string | null;
};

const initialState: LatestAdState = {
    latestAds: [],
    loading: false,
    error: null,
};

export const fetchLatestAds = createAsyncThunk('latestAds/fetchLatestAds', async () => {
    const response = await axios.get<LatestAd[]>('https://www.index.hr/oglasi/mock/latestAds');
    return response.data;
});

const latestAdSlice = createSlice({
    name: 'latestAds',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchLatestAds.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchLatestAds.fulfilled, (state, action: PayloadAction<LatestAd[]>) => {
          state.loading = false;
          state.latestAds = action.payload;
        })
        .addCase(fetchLatestAds.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message ?? 'Failed to fetch latest ads';
        });
    },
});
  
export default latestAdSlice.reducer;
  