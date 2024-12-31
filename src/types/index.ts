export interface TokenBalance {
  name: string;
  balance: number;
}

export type CampaignType = {
  id: number;
  creator: string;
  description: string;
  createdAt: number;
  endDate: number;
  goal: number;
  imageLink: string;
  status: number;
  tokenDecimals: number;
  preferredToken: string;
  title: string;
  totalRaised: number;
  contributions: Contribution[];
}

export type Contribution = {
  contributor: string;
  amount: number;
  timestamp: number;
}

export type CountdownTimerProps = {
  timestamp: number | undefined;
  clockOnly?: boolean;
}

export type TimerState = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  completed?: boolean;
  isLoading?: boolean;
};

export enum ApprovalType {
  UNKNOWN = 'UNKNOWN',
  NOT_APPROVED = 'NOT_APPROVED',
  APPROVED = 'APPROVED',
}

export enum CampaignStatus { Active, Ended, Cancelled, Claimed }