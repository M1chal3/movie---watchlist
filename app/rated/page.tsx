import {getPopularMovies, getTopRatedMovies }from "@/lib/tmbd"
import MovieGrid from "@/components/movieGrid";

  

export default async function TopRatedPage() {

    const movies = await getTopRatedMovies();
    

   return (
    <div>
        <MovieGrid 
            movies={movies} 
            title="Top Rated Movies" 
             category="rated"
        />
    </div>
)

}