import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  //? GraphQL query
  const query = gql`
    query myQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "tr"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          image
          description
          country
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          total
          offset
        }
      }
    }
  `;
  //? Fetch func with Next.js 13 caching...
  const res = await fetch(
    "https://sobradinho.stepzen.net/api/zeroed-wasp/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query: query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  console.log(category, keywords);

  const newsResponse = await res.json();
  //? Sort func by images cs not images

  //   const news = sortNewsByImage(newsResponse.data.myQuery);

  return newsResponse;
};

export default fetchNews;

//! stepzen import curl http://api.mediastack.com/v1/news?access_key=ad9041fc822e12eac76f4d9490ca09ae&sources=business
