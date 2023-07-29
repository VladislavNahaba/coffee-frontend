export type Quota = {
  id: number;
  name: string;
  quotas: {
    id: number;
    amount: number;
    type: "daily" | "hourly";
    coffee: {
      id: number;
      type: string;
    };
  }[];
};
