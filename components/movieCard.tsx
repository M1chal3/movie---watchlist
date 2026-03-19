import Image from "next/image"
import Link from "next/link"
import { Movie } from "@/types"

interface MovieCardProps{
    movie: Movie
    category: string
}

export default function MovieCard({ movie, category }: MovieCardProps) {
    return (
        <Link href={`/${category}/${movie.id}`}>
            <div className="relative group cursor-pointer rounded-xl overflow-hidden">
                <div className="relative w-full h-72">
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg">{movie.title}</h3>
                    <p className="text-zinc-400 text-sm">{movie.release_date}</p>
                    <p className="text-yellow-400 text-sm">⭐ {movie.vote_average?.toFixed(1)}</p>
                </div>
                <div className="p-3 bg-zinc-900">
                    <h3 className="text-white font-semibold text-sm truncate">{movie.title}</h3>
                </div>
            </div>
        </Link>
    )
}