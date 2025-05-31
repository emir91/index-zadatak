import { Module } from "../../../apis/apiTypes";

export type ModuleState = {
  modules: Module[];
  loading: boolean;
  error: string | null;
}