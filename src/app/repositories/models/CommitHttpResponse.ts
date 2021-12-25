import { Commit } from "./Commit";

export interface CommitHttpResponse {
  total_count: number;
  items: Commit[]
}
