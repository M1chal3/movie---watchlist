import DetailView from "@/components/detailView"
import  getDetailedMovie, { getMovieCredits, getMovieVideos, getMovieImages } from "@/lib/tmbd"

interface PageProps {
    params: Promise<{ id: string }>
}

export default async function TopRatedDetailedPage({ params }: PageProps) {
    const { id } = await params
    const movie = await getDetailedMovie(id)
    const credits = await getMovieCredits(id)
    const videos = await getMovieVideos(id)
    const images = await getMovieImages(id)
    

    const gallery = images.backdrops?.slice(0, 12)

    const director = credits.crew?.find(p => p.job === "Director")
        ?? { name: "Unknown", job: "Director" }

    const trailer = videos.results?.find(v => v.type === "Trailer" && v.site === "YouTube")
    const cast = credits.cast?.slice(0, 8)

    return (
        <DetailView
            movie={movie}
            director={director}
            cast={cast}
            trailer={trailer}
            gallery={gallery}
        />
    )
}