import Hero from "./components/hero/Hero";

/**
 * Main Page Entrypoint
 * Renders solely the cinematic, luxury editorial Hero Section for WIPF.
 */
export default function Home() {
  return (
    <main className="min-h-[100svh] sm:h-[100svh] sm:max-h-[100svh] w-full bg-[#02040a] text-white overflow-hidden">
      <Hero />
    </main>
  );
}
