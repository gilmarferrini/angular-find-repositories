import { Issue } from './Issue';

export interface IssueHttpResponse {
  total_count: number;
  items: Issue[]
}
