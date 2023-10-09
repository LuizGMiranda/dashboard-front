import { fetch } from "../common/fetch";
import { Stock } from "../common/types/Stock";

export class StockServie {
  static async getStocks(): Promise<Stock[]> {
    try {
      const response = await fetch.get<Stock[]>('/stock');
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async updateStockById(id, form): Promise<Stock> {
    try {
      const response = await fetch.put<Stock>(`/stock/${id}`, {
        ...form
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async deleteStockById(id): Promise<Stock> {
    try {
      const response = await fetch.delete<Stock>(`/stock/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}