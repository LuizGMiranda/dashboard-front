export interface FinancialType {
  id: number
  transactionDate: string
  paymentDate?: string
  type: string
  amount: string
  description: string
  createdAt: {
    seconds: number
    nanoseconds: number
  }
  show: boolean
}