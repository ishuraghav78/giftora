import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OccasionGrid from "../components/OccasionGrid";
import ProductCollection from "../components/ProductCollection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf8] text-[#3f202b]">
      <Navbar />
      <Hero />
      <OccasionGrid />
      <ProductCollection />
    </main>
  );
}
