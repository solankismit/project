import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Cpu } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-slate-900" />
        <div className="container mx-auto px-4 my-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              Powering Tomorrow's Innovations
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Qualitude brings together sustainable energy solutions and
              cutting-edge technology to create a brighter, more efficient
              future for businesses worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-lg transition-all hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-slate-900 opacity-50" />
              <div className="relative z-10">
                <Sun className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h2 className="text-2xl font-bold mb-4">Qualitude Solar</h2>
                <p className="text-muted-foreground mb-6">
                  Harness the power of sustainable energy with our innovative
                  solar solutions, designed to reduce costs and environmental
                  impact.
                </p>
                <Link href="/solar">
                  <Button className="group">
                    Explore Solar Solutions
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-lg transition-all hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 opacity-50" />
              <div className="relative z-10">
                <Cpu className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h2 className="text-2xl font-bold mb-4">
                  Qualitude Technologies
                </h2>
                <p className="text-muted-foreground mb-6">
                  Transform your business with our advanced technology
                  solutions, from custom software development to IT consulting.
                </p>
                <Link href="/technologies">
                  <Button className="group">
                    Discover Tech Services
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Why Choose Qualitude?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrated Solutions",
                description:
                  "Seamlessly combine sustainable energy and technology solutions for maximum efficiency.",
              },
              {
                title: "Industry Expertise",
                description:
                  "Years of experience in both solar energy and technology sectors.",
              },
              {
                title: "Innovation Focus",
                description:
                  "Constantly evolving and adapting to bring you the latest advancements.",
              },
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
