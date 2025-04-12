import Image from "next/image"
import { SiteHeader } from "../components/layout/site-header"
import { SiteFooter } from "../components/layout/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

export default function StorePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1 w-full">
        <section className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black z-10" />
          <div
            className="h-[40vh] bg-cover bg-center"
            style={{
              backgroundImage: "url('/store-banner.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          />
          <div className="container max-w-screen-xl mx-auto absolute bottom-0 left-0 right-0 z-20 px-4 pb-10 md:px-6 md:pb-20">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">STORE</h1>
          </div>
        </section>

        <section className="py-12 md:py-16 w-full">
          <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">MERCHANDISE</h2>
                <p className="mt-2 text-white/60">Get your favorite band's merchandise</p>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[
                  "T-Shirt", "Hoodie", "Cap", "Poster", 
                  "Sticker Set", "Tote Bag", "Pin Badge", "Wristband"
                ].map((item, i) => (
                  <Card key={i} className="bg-zinc-900 border-white/10 overflow-hidden">
                    <div className="aspect-square w-full overflow-hidden bg-zinc-800 relative">
                      <Image
                        src={`/merch-${(i % 4) + 1}.jpg`}
                        alt={item}
                        fill
                        className="object-cover transition-all hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="line-clamp-1">{`${["Warker's", "Warker's", "Warker's", "Warker's"][i % 4]} ${item}`}</CardTitle>
                      <CardDescription className="text-white/60">
                        ¥{(i + 1) * 1000}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
