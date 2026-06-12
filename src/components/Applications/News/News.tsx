import { NewsItem } from "@api/news/news";
import { getAllNews } from "@api/news/news.client";
import { useQuery } from "@tanstack/react-query";

export const News = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["news"],
    queryFn: getAllNews,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col flex-1 max-h-full px-6 overflow-y-auto">
      <h1 className="w-full text-4xl font-bold text-left mb-4">News</h1>

      {data?.data?.map((newsItem: NewsItem) => (
        <div key={newsItem.id} className="mb-4 p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2 text-left">
            {newsItem.name}
          </h2>
          <p className="text-sm text-gray-600 mb-2 text-left">
            From: {newsItem.email}
          </p>
          <p className="text-gray-800 text-left">{newsItem.body}</p>
        </div>
      ))}
    </div>
  );
};
