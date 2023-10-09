type Stock = {
  id: string;
  title: string;
  description: string;
  unit: string;
  amount: string;
  show: boolean;
  createdAt: {
    seconds: number,
    nanoseconds: number
  }
};

export type {
  Stock
}