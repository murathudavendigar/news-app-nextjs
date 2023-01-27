//! COMPONENTS
import NewsList from "../components/NewsList";

//! CONSTANTS
import { categories } from "../constants";

//! FUNC
import fetchNews from "../lib/fetchNews";

const Homepage = async () => {
  const news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
};

export default Homepage;
