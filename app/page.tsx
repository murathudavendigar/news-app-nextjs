import NewsList from "../components/NewsList";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import response from "../response.json";

const Homepage = async () => {
  const news: NewsResponse =
    response || (await fetchNews(categories.join(",")));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
};

export default Homepage;
