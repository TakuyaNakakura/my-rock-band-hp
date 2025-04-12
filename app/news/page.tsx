import { SiteHeader } from "../components/layout/site-header"
import { SiteFooter } from "../components/layout/site-footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1 w-full">
        <section className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black z-10" />
          <div
            className="h-[40vh] bg-cover bg-center"
            style={{
              backgroundImage: "url('/news-banner.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          />
          <div className="container max-w-screen-xl mx-auto absolute bottom-0 left-0 right-0 z-20 px-4 pb-10 md:px-6 md:pb-20">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">NEWS</h1>
          </div>
        </section>

        <section className="py-12 md:py-16 w-full">
          <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="space-y-6">
              {Array.from({ length: 8 }, (_, i) => i + 1).map((i) => (
                <Card key={i} className="bg-zinc-900 border-white/10">
                  <CardHeader>
                    <CardTitle>Warker's announces new album release date</CardTitle>
                    <CardDescription className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {`${new Date().getMonth() + 1}/${i + 10}/2023`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies
                      lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl. Sed euismod, nisl vel
                      ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl vel nisl.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="border-white/20 hover:bg-white/10">
                      Read More
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
