import Image from "next/image"
import { SiteHeader } from "../components/layout/site-header"
import { SiteFooter } from "../components/layout/site-footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1 w-full">
        <section className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black z-10" />
          <div
            className="h-[40vh] bg-cover bg-center"
            style={{
              backgroundImage: "url('/about-banner.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          />
          <div className="container max-w-screen-xl mx-auto absolute bottom-0 left-0 right-0 z-20 px-4 pb-10 md:px-6 md:pb-20">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">ABOUT</h1>
          </div>
        </section>

        <section className="py-12 md:py-16 w-full">
          <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">OUR STORY</h2>
                <p className="text-white/80 mb-4">
                  Warker's was founded in 2024.
                </p>
              </div>
              <div className="relative h-[400px] md:h-auto">
                <Image
                  src="/about-image.jpg"
                  alt="Warker's Office"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
