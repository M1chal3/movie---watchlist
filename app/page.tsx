import Link from "next/link"

const categories = [
  { title: "Most Popular", href: "/popular", description: "The most watched movies right now" },
  { title: "Top Rated", href: "/rated", description: "Highest rated movies of all time" },
  { title: "Upcoming", href: "/upcoming", description: "Coming soon to cinemas" },
]

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-zinc-950 flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {categories.map((category) => (
          <Link
            key={category.href}
            href={category.href}
            className="group flex flex-col justify-end p-8 h-96 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-zinc-500 hover:scale-105 transition-all duration-300"
          >
            <h2 className="text-white text-2xl font-bold mb-2">{category.title}</h2>
            <p className="text-zinc-400 text-sm">{category.description}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}