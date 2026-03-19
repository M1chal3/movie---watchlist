// types/index.ts
export interface Movie {
  id: number
    title: string
    overview: string
    poster_path: string
    release_date: string
    vote_average: number
    genre_ids: number[]
    backdrop_path: string
  
}

export interface MovieDetails extends Movie {
    genres: { id: number; name: string }[]
    runtime: number
    tagline: string
    homepage: string
    status: string
    budget: number
    revenue: number
}

export interface Crew{
  name: string
  job: string 

}

export interface CastMember {
    id: number
    name: string
    character: string
    profile_path: string
}

export interface Credits {
    crew: Crew[]
    cast: CastMember[]
}

export interface Video {
    key: string
    site: string
    type: string
}

export interface VideosResponse {
    results: Video[]
}

export interface MovieImage {
    file_path: string
}

export interface ImagesResponse {
    backdrops: MovieImage[]
}