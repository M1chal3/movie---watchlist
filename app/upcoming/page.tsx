import {getPopularMovies, getTopRatedMovies, getUpcomingMovies }from "@/lib/tmbd"
import MovieGrid from "@/components/movieGrid";

  

export default async function UpcomingPage() {

    const movies = await getUpcomingMovies();
    

   return (
    <div>
        <MovieGrid 
            movies={movies} 
            title="Upcoming Movies" 
             category="upcoming"
        />
    </div>
)

}