import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="w-full dark:bg-primary bg-background  dark:bg-grid-white/[0.06] bg-grid-black/[0.06] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-primary bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 relative z-20">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={"#"}
            className="bg-muted rounded-2xl px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on Twitter
          </Link>
          <h1 className="animate-fade-up font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl" style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
            <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text font-extrabold text-transparent">Next.JS SaaS Boilerplate</span> for building awesome applications
          </h1>
          <p className="animate-fade-up text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
            Speed up your saas development and save months of work.
          </p>
          <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Get started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
