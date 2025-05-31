import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { latestAdsApi } from '../../../apis/apis';
import { LatestAd } from '../../../apis/apiTypes';
import { LatestAdState } from './latestAdsTypes';
import { ERROR_MSG } from '../../../constants';

const initialState: LatestAdState = {
    latestAds: [],
    loading: false,
    error: null,
};

export const fetchLatestAds = createAsyncThunk('latestAds/fetchLatestAds', async () => {
    const data = await latestAdsApi();
    return data;
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
          state.error = action.error.message ?? `${ERROR_MSG} latest ads`;
        });
    },
});
  
export default latestAdSlice.reducer;
  