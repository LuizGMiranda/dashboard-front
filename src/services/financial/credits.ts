import { fetch } from "../../common/fetch";
import { FinancialType } from "../../common/types/Financial";
import { FilterType } from "../../pages/Financial/context/Filter";


export class FinancialCreditsService {
  static async getCredits(): Promise<FinancialType[]> {
    try {
      const response = await fetch.get<FinancialType[]>('/financial');
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async getTransactionsByFilter({ type, date }: FilterType): Promise<FinancialType[]> {
    try {
      const response = await fetch.get<FinancialType[]>('/financial/filter/', {
        params: {
          type,
          date
        }
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async createTransaction(transaction: FinancialType): Promise<FinancialType> {
    try {
      const response = await fetch.post<FinancialType>('/financial', transaction);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}