import { Owner } from './Owner'

export interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  owner: Owner;
}
