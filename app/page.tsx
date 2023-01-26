import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

const Homepage = async () => {
  const news: NewsResponse = await fetchNews(categories.join(","));

  console.log(news);

  return <div></div>;
};

export default Homepage;
