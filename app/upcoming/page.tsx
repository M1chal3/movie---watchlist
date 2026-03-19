import { getUpcomingMovies } from "@/lib/tmbd"
import MovieGrid from "@/components/movieGrid";
import NavArrows from "@/components/NavArrows";

export default async function UpcomingPage() {

    const movies = await getUpcomingMovies();

    return (
        <div>
            <MovieGrid 
                movies={movies} 
                title="Upcoming Movies" 
                category="upcoming"
            />
            <NavArrows prev="/rated" next="/" />
        </div>
    )
}