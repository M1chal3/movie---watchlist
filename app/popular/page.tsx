import {getPopularMovies }from "@/lib/tmbd"
import MovieGrid from "@/components/movieGrid";
import NavArrows from "@/components/NavArrows";

  

export default async function PopularPage() {

    const movies = await getPopularMovies();
    

   return (
    <div>
        <MovieGrid 
            movies={movies} 
            title="Popular Movies" 
            category="popular"
             
        />
        <NavArrows prev="/" next="/rated" />

    </div>
)

}