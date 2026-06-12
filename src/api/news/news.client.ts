import { apiRequest } from "../Api";
import { NewsItem } from "./news";

export const getAllNews = () =>
  apiRequest<{}, NewsItem[]>({
    url: "comments?_limit=10",
  });
