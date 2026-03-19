import Image from "next/image"
import { MovieDetails, Crew, CastMember, Video, MovieImage } from "@/types"

interface DetailViewProps {
    movie: MovieDetails
    director: Crew
    cast: CastMember[]
    trailer?: Video
    gallery: MovieImage[]
}

export default function DetailView({ movie, director, cast, trailer, gallery }: DetailViewProps) {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">

            {/* HERO */}
            <div className="relative w-full h-screen overflow-hidden">
                <Image
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-6xl mx-auto px-8 w-full">
                        <div className="max-w-2xl">
                            <p className="text-zinc-400 italic text-lg mb-3">{movie.tagline}</p>
                            <h1 className="text-7xl font-black mb-6 leading-none tracking-tight">{movie.title}</h1>
                            <div className="flex items-center gap-4 text-sm text-zinc-300 mb-6">
                                {movie.vote_average > 0 && (
                                    <span className="text-yellow-400 font-bold text-lg">⭐ {movie.vote_average?.toFixed(1)}</span>
                                )}
                                <span>•</span>
                                <span>{movie.release_date?.slice(0, 4)}</span>
                                <span>•</span>
                                <span>{movie.runtime} min</span>
                                <span>•</span>
                                <span className="uppercase tracking-widest text-xs">{movie.status}</span>
                            </div>
                            <div className="flex gap-2 flex-wrap mb-8">
                                {movie.genres?.map(genre => (
                                    <span key={genre.id} className="px-4 py-1 border border-white/20 rounded-full text-xs text-white/70 backdrop-blur-sm">
                                        {genre.name}
                                    </span>
                                ))}
                            </div>
                            <p className="text-zinc-300 text-lg leading-relaxed max-w-xl">{movie.overview}</p>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest uppercase animate-bounce">
                    scroll
                </div>
            </div>

            {/* ALL CONTENT BELOW HERO */}
            <div className="bg-black">

                {/* TRAILER */}
                {trailer && (
                    <div className="max-w-6xl mx-auto px-8 py-20">
                        <h2 className="text-3xl font-bold mb-8 tracking-tight">Trailer</h2>
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                            <iframe
                                src={`https://www.youtube.com/embed/${trailer.key}`}
                                title="Movie Trailer"
                                className="w-full h-full absolute inset-0"
                                allowFullScreen
                            />
                        </div>
                    </div>
                )}

                {/* GALLERY */}
                {gallery?.length > 0 && (
                    <div className="max-w-6xl mx-auto px-8 py-12">
                        <h2 className="text-3xl font-bold mb-8 tracking-tight">Gallery</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {gallery.map((image, index) => (
                                <div key={index} className="relative aspect-video rounded-xl overflow-hidden">
                                    <Image
                                        src={`https://image.tmdb.org/t/p/w780${image.file_path}`}
                                        alt="Movie scene"
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* CAST */}
                {cast?.length > 0 && (
                    <div className="max-w-6xl mx-auto px-8 py-12">
                        <h2 className="text-3xl font-bold mb-8 tracking-tight">Cast</h2>
                        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                            {cast.map(person => (
                                <div key={person.id} className="flex flex-col items-center gap-2">
                                    <div className="relative w-full aspect-square rounded-full overflow-hidden bg-zinc-900">
                                        {person.profile_path ? (
                                            <Image
                                                src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                                                alt={person.name}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-zinc-600 text-2xl">?</div>
                                        )}
                                    </div>
                                    <p className="text-white text-xs font-semibold text-center">{person.name}</p>
                                    {isNaN(Number(person.character)) && (
                                        <p className="text-zinc-500 text-xs text-center">{person.character}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* DETAILS */}
                <div className="max-w-6xl mx-auto px-8 py-12">
                    <h2 className="text-3xl font-bold mb-8 tracking-tight">Details</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6">
                            <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">Director</p>
                            <p className="text-white font-bold text-lg">{director.name}</p>
                        </div>
                        {movie.budget > 0 && (
                            <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6">
                                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">Budget</p>
                                <p className="text-white font-bold text-lg">${movie.budget?.toLocaleString()}</p>
                            </div>
                        )}
                        {movie.revenue > 0 && (
                            <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6">
                                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">Revenue</p>
                                <p className="text-white font-bold text-lg">${movie.revenue?.toLocaleString()}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* BACK */}
                <div className="max-w-6xl mx-auto px-8 pb-20">
                    <a href="/popular" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
                        ← Back to Popular
                    </a>
                </div>

            </div>
        </div>
    )
}