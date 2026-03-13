import { Movie } from "@/types/index";

interface TMBDResponse{
    results: Movie[]
    
}
export default async function getPopularMovies(): Promise<Movie[]> {
 

    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + process.env.TMDB_API_KEY, {
       
    });
  const data: TMBDResponse = await res.json();

  return data.results;
   
}

