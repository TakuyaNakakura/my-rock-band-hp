import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black py-6 md:py-8 w-full">
      <div className="container max-w-screen-xl mx-auto flex flex-col items-center gap-4 px-4 md:flex-row md:justify-between md:px-6">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tighter text-red-600">Warker's</span>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/privacy" className="text-xs hover:text-red-600 transition-colors">
            PRIVACY POLICY
          </Link>
          <Link href="/terms" className="text-xs hover:text-red-600 transition-colors">
            TERMS OF SERVICE
          </Link>
          <Link href="/contact" className="text-xs hover:text-red-600 transition-colors">
            CONTACT
          </Link>
        </nav>
        <div className="text-xs text-white/60">© 2023 Warker's. All rights reserved.</div>
      </div>
    </footer>
  )
}
