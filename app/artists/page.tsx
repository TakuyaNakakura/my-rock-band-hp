import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "../components/layout/site-header"
import { SiteFooter } from "../components/layout/site-footer"

export default function ArtistsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1 w-full">
        <section className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black z-10" />
          <div
            className="h-[40vh] bg-cover bg-center"
            style={{
              backgroundImage: "url('/hero-background.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          />
          <div className="container max-w-screen-xl mx-auto absolute bottom-0 left-0 right-0 z-20 px-4 pb-10 md:px-6 md:pb-20">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">ARTISTS</h1>
          </div>
        </section>

        <section className="py-12 md:py-16 w-full">
          <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {["Warker's", "Warker's", "Warker's", "Warker's", "Warker's", "Warker's", 
                "Warker's", "Warker's", "Warker's", "Warker's"].map((artist, i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg bg-zinc-800">
                  <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:bg-black/70 z-10" />
                  <div className="relative h-full w-full" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={`/artist-${(i % 6) + 1}.jpg`}
                      alt={artist}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="text-xl font-bold">{artist}</h3>
                    <Button variant="link" className="mt-2 p-0 text-red-600 hover:text-red-500">
                      View Artist <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
