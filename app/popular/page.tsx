import {getPopularMovies }from "@/lib/tmbd"
import MovieGrid from "@/components/movieGrid";

  

export default async function PopularPage() {

    const movies = await getPopularMovies();
    

   return (
    <div>
        <MovieGrid 
            movies={movies} 
            title="Popular Movies" 
            category="popular"
             
        />
    </div>
)

}