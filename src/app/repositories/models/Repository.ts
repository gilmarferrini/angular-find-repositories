import { Owner } from './Owner'

export interface Repository {
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  owner: Owner;
}
