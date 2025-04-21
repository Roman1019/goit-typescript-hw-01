import axios from "axios";

export default function taskGenerics1() {
  async function fetchData<T>(url: string): Promise<T> {
    try {
      const response = await axios.get<T>(url);
      console.log(response.data);

      return response.data;
    } catch (error: any) {
      throw new Error(`Error fetching from ${url}: ${error}`);
    }
  }
}
