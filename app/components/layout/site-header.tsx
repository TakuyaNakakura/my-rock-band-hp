import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-black/80 backdrop-blur-sm w-full">
      <div className="container max-w-screen-xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-red-600">Warker's</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/artists" className="text-sm font-medium hover:text-red-600 transition-colors">
            ARTISTS
          </Link>
          <Link href="/releases" className="text-sm font-medium hover:text-red-600 transition-colors">
            RELEASES
          </Link>
          <Link href="/news" className="text-sm font-medium hover:text-red-600 transition-colors">
            NEWS
          </Link>
          <Link href="/store" className="text-sm font-medium hover:text-red-600 transition-colors">
            STORE
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-red-600 transition-colors">
            ABOUT
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
    </header>
  )
}
