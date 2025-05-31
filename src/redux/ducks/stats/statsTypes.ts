import { Stats } from "../../../apis/apiTypes";

export type StatsState = {
  stats: Stats | null;
  loading: boolean;
  error: string | null;
};