import Link from "next/link"

interface NavArrowsProps {
    prev: string
    next: string
}

export default function NavArrows({ prev, next }: NavArrowsProps) {
    return (
        <>
            <Link
                href={prev}
                className="fixed left-6 bottom-8 z-50 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all duration-200"
            >
                ←
            </Link>
            <Link
                href={next}
                className="fixed right-6 bottom-8 z-50 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all duration-200"
            >
                →
            </Link>
        </>
    )
}