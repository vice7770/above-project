export const fetchAllEpisodes = async (searchTerm = "") => {
    const GRAPHQL_ENDPOINT =
      "https://qzdu2mazrzfr3pvzuv6z5txkji.appsync-api.us-east1.amazonaws.com/graphql";
    const API_KEY = "YOUR_API_KEY"; // Replace with your actual API key
  
    try {
      const response = await fetch(GRAPHQL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
        body: JSON.stringify({
          query: `
            query ListEpisodes($search: String) {
              listEpisodes(search: $search) {
                id
                series
                title
                description
                seasonNumber
                episodeNumber
                releaseDate
                imdbId
              }
            }
          `,
          variables: { search: searchTerm },
        }),
      });
  
      const { data, errors } = await response.json();
  
      if (errors) {
        throw new Error(errors.map((error) => error.message).join(", "));
      }
  
      return data.listEpisodes;
    } catch (error) {
      console.error("Error fetching episodes:", error);
      throw error;
    }
  };
  