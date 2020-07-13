import axios from "axios";

export class SearchService {
  static async getSeacrhResults(query) {
    try {
      const response = await axios.get(
        `http://localhost:3035/search?value=${query}`
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}
