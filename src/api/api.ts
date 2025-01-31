
interface Rating {
    Source: string;
    Value: string;
  }
  
  interface Movie {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
  }

export async function getEpisodesImage({ id }: { id: string }) {
    const key = import.meta.env.VITE_OMDB_API_KEY
;
    const response = await fetch(` http://www.omdbapi.com/?i=${id}&apikey=${key}`)
    return response.json() as Promise<Movie>;
}