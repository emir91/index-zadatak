export type LatestAdSummary = {
    makeYear: string;
    mileage: number;
    fuelType: string;
    power: number;
};
  
export type LatestAd = {
    id: string;
    title: string;
    city: string;
    imageId: string;
    postedTime: string;
    price: number;
    previousPrice: number | null;
    smartLink: string;
    summary: LatestAdSummary;
};