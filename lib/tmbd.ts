import { Credits, Movie, MovieDetails, VideosResponse, ImagesResponse } from "@/types/index";



interface TMBDResponse{
    results: Movie[]
    
    
}


//Fetching popular movies from TMBD API 
export  async function getPopularMovies(): Promise<Movie[]> {
 

    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + process.env.TMDB_API_KEY, {
       
    });
  const data: TMBDResponse = await res.json();

  return data.results;
   
}

export  async function getTopRatedMovies(): Promise<Movie[]> {
 

    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=' + process.env.TMDB_API_KEY, {
       
    });
  const data: TMBDResponse = await res.json();

  return data.results;
   
}

export  async function getUpcomingMovies(): Promise<Movie[]> {
 

    const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&region=US&language=en-US`, {
       
    });
  const data: TMBDResponse = await res.json();
  
const today = new Date().toISOString().slice(0, 10)
return data.results.filter((movie: Movie) => movie.release_date > today)

   
}

export default async function getDetailedMovie(id: string): Promise<MovieDetails>{

const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&region=US&language=en-US`, {
       
    });
  const data: MovieDetails = await res.json();

  return data;
}

export async function getMovieCredits(id: string): Promise<Credits>{

const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=` + process.env.TMDB_API_KEY, {
       
    });
  const data: Credits = await res.json();

  return data;

}

export async function getMovieVideos(id: string): Promise<VideosResponse> {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=` + process.env.TMDB_API_KEY)
    const data: VideosResponse = await res.json()
    return data
}

export async function getMovieImages(id: string): Promise<ImagesResponse> {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=` + process.env.TMDB_API_KEY)
    const data: ImagesResponse = await res.json()
    return data
}