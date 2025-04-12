import Image from "next/image"
import { Calendar, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "../components/layout/site-header"
import { SiteFooter } from "../components/layout/site-footer"

export default function ReleasesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1 w-full">
        <section className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black z-10" />
          <div
            className="h-[40vh] bg-cover bg-center"
            style={{
              backgroundImage: "url('/releases-banner.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          />
          <div className="container max-w-screen-xl mx-auto absolute bottom-0 left-0 right-0 z-20 px-4 pb-10 md:px-6 md:pb-20">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">RELEASES</h1>
          </div>
        </section>

        <section className="py-12 md:py-16 w-full">
          <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 12 }, (_, i) => i + 1).map((i) => (
                <Card key={i} className="bg-zinc-900 border-white/10 overflow-hidden">
                  <div className="aspect-square w-full overflow-hidden bg-zinc-800 relative">
                    <Image
                      src={`/album-${(i % 4) + 1}.jpg`}
                      alt={`Album ${i}`}
                      fill
                      className="object-cover transition-all hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="line-clamp-1">Album Title {i}</CardTitle>
                    <CardDescription className="text-white/60">
                      {["Warker's", "Warker's", "Warker's", "Warker's", "Warker's", "Warker's"][i % 6]}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <div className="flex items-center text-sm text-white/60">
                      <Calendar className="mr-1 h-3 w-3" />
                      {2023 - (i % 5)}
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 text-red-600 hover:text-red-500 hover:bg-white/5">
                      <Play className="mr-1 h-3 w-3" /> Play
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
