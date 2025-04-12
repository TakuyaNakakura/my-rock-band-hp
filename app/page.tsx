import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "./components/layout/site-header"
import { SiteFooter } from "./components/layout/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1 w-full">
        <section className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black z-10" />
          <div
            className="h-[70vh] bg-cover bg-center"
            style={{
              backgroundImage: "url('/hero-background.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          />
          <div className="container max-w-screen-xl mx-auto absolute bottom-0 left-0 right-0 z-20 px-4 pb-10 md:px-6 md:pb-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">NEW RELEASE</h1>
              <p className="mt-4 text-xl text-white/90">Warker's - NEW SONG</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button className="bg-red-600 hover:bg-red-700">
                  LISTEN NOW
                  <Play className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-white/20 hover:bg-white/10">
                  VIEW DETAILS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-white/10 bg-zinc-950 py-12 md:py-16 w-full">
          <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">LATEST RELEASES</h2>
              <p className="text-white/60">Check out our newest music releases</p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="bg-zinc-900 border-white/10 overflow-hidden">
                  <div className="aspect-square w-full overflow-hidden bg-zinc-800 relative">
                    <Image
                      src={`/album-${i}.jpg`}
                      alt={`Album ${i}`}
                      fill
                      className="object-cover transition-all hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      priority={i === 1}
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="line-clamp-1">Album Title {i}</CardTitle>
                    <CardDescription className="text-white/60">Artist Name</CardDescription>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <div className="flex items-center text-sm text-white/60">
                      <Calendar className="mr-1 h-3 w-3" />
                      2023
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 text-red-600 hover:text-red-500 hover:bg-white/5">
                      <Play className="mr-1 h-3 w-3" /> Play
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                VIEW ALL RELEASES
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <section className="border-t border-white/10 py-12 md:py-16 w-full">
          <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">FEATURED ARTISTS</h2>
              <p className="text-white/60">Discover the talent behind Warker's</p>
            </div>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {["Warker's", "Warker's", "Warker's", "Warker's", "Warker's", "Warker's"].map((artist, i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg bg-zinc-800">
                  <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:bg-black/70 z-10" />
                  <div className="relative h-full w-full" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={`/artist-${i+1}.jpg`}
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
        <section className="border-t border-white/10 bg-zinc-950 py-12 md:py-16 w-full">
          <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">UPCOMING EVENTS</h2>
              <p className="text-white/60">Don't miss our artists live on stage</p>
            </div>
            <div className="mt-8 space-y-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-zinc-900 border-white/10">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className="flex-none p-4 sm:w-48 md:w-56 lg:w-64">
                        <div className="flex flex-col items-center justify-center space-y-1 text-center">
                          <div className="text-3xl font-bold text-red-600">{10 + i}</div>
                          <div className="text-sm text-white/60">JUNE 2023</div>
                        </div>
                      </div>
                      <Separator orientation="vertical" className="hidden sm:block" />
                      <div className="flex flex-1 flex-col p-4">
                        <h3 className="text-lg font-bold">Summer Punk Festival {i}</h3>
                        <p className="mt-1 text-sm text-white/60">Tokyo, Japan</p>
                        <div className="mt-4 flex items-center gap-4">
                          <div className="flex items-center text-sm">
                            <Clock className="mr-1 h-4 w-4 text-white/60" />
                            <span>19:00</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <span className="text-white/60">Featuring:</span>
                            <span className="ml-1">Warker's</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center p-4">
                        <Button className="bg-red-600 hover:bg-red-700">GET TICKETS</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                VIEW ALL EVENTS
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <section className="border-t border-white/10 py-12 md:py-16 w-full">
          <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">NEWSLETTER</h2>
                <p className="mt-4 text-white/60">
                  Subscribe to our newsletter to get the latest news, releases, and event information.
                </p>
                <div className="mt-6 flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-md border border-white/20 bg-black px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                  <Button className="bg-red-600 hover:bg-red-700">SUBSCRIBE</Button>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">FOLLOW US</h2>
                <p className="mt-4 text-white/60">
                  Stay connected with us on social media for daily updates and behind-the-scenes content.
                </p>
                <div className="mt-6 flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-white/10">
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
                      className="h-5 w-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-white/10">
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
                      className="h-5 w-5"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-white/10">
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
                      className="h-5 w-5"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-white/10">
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
                      className="h-5 w-5"
                    >
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3z" />
                    </svg>
                    <span className="sr-only">YouTube</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
