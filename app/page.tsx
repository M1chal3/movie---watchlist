import Link from "next/link"
import Image from "next/image"
import { getPopularMovies } from "@/lib/tmbd"
import { getTopRatedMovies } from "@/lib/tmbd"
import { getUpcomingMovies } from "@/lib/tmbd"

const categories = [
  { title: "Most Popular", description: "The most watched movies right now", href: "/popular" },
  { title: "Top Rated", description: "Highest rated movies of all time", href: "/rated" },
  { title: "Upcoming", description: "Coming soon to cinemas", href: "/upcoming" },
]

export default async function Home() {
  const [popular, rated, upcoming] = await Promise.all([
    getPopularMovies(),
    getTopRatedMovies(),
    getUpcomingMovies(),
  ])

  const images = [
    popular[0]?.backdrop_path,
    rated[0]?.backdrop_path,
    upcoming[0]?.backdrop_path,
  ]

  return (
    <main className="min-h-screen w-full bg-zinc-950 flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {categories.map((category, index) => (
          <Link
            key={category.href}
            href={category.href}
            className="group relative flex flex-col justify-end p-8 h-96 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-500 transition-all duration-300"
          >
            {/* Background image */}
            {images[index] && (
              <Image
                src={`https://image.tmdb.org/t/p/original${images[index]}`}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Text */}
            <div className="relative z-10">
              <h2 className="text-white text-2xl font-bold mb-2">{category.title}</h2>
              <p className="text-zinc-400 text-sm">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}