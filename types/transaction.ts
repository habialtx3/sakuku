// types/transaction.ts
export type TransactionType = 'expense' | 'income'

export interface Transaction {
  id: string
  type: TransactionType
  amount: number
  category: string
  date: string
  notes: string
  createdAt: number
}