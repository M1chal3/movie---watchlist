import { Movie } from "@/types"
import MovieCard from "./movieCard"

interface MovieGridProps {
    movies: Movie[]
    title: string
    category: string
}

export default function MovieGrid({ movies, title, category }: MovieGridProps) {
    return (
        <div className="min-h-screen bg-zinc-950 p-8">
            <h2 className="text-white text-3xl font-bold mb-8">{title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} category={category}/>
                ))}
            </div>
        </div>
    )
}