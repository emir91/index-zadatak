import { LatestAd } from "../../../apis/apiTypes";

export type LatestAdState = {
    latestAds: LatestAd[];
    loading: boolean;
    error: string | null;
};