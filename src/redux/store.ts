import { configureStore } from '@reduxjs/toolkit';
import moduleReducer from './ducks/modules/modulesSlice';
import latestAdReducer from './ducks/latestAds/latestAdsSlice';
import statsReducer from './ducks/stats/statsSlice';

export const store = configureStore({
    reducer: {
      modules: moduleReducer,
      latestAds: latestAdReducer,
      stats: statsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
  