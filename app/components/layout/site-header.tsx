"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-sm w-full">
      <div className="container max-w-screen-xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-red-600">Warker&apos;s</span>
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
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={toggleMenu}
          data-slot="trigger"
        >
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

      {/* モバイルメニュー */}
      <div 
        className={`fixed inset-0 bg-black z-50 pt-16 px-4 ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:hidden`}
        data-slot="content"
      >
        <div className="flex justify-end mb-8">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className="text-white"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="flex flex-col gap-6 items-center">
          <Link 
            href="/artists" 
            className="text-xl font-medium hover:text-red-600 transition-colors"
            onClick={toggleMenu}
          >
            ARTISTS
          </Link>
          <Link 
            href="/releases" 
            className="text-xl font-medium hover:text-red-600 transition-colors"
            onClick={toggleMenu}
          >
            RELEASES
          </Link>
          <Link 
            href="/news" 
            className="text-xl font-medium hover:text-red-600 transition-colors"
            onClick={toggleMenu}
          >
            NEWS
          </Link>
          <Link 
            href="/store" 
            className="text-xl font-medium hover:text-red-600 transition-colors"
            onClick={toggleMenu}
          >
            STORE
          </Link>
          <Link 
            href="/about" 
            className="text-xl font-medium hover:text-red-600 transition-colors"
            onClick={toggleMenu}
          >
            ABOUT
          </Link>
        </nav>
      </div>
    </header>
  )
}
