import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import OccasionGrid from "../components/OccasionGrid";
import ProductCollection from "../components/ProductCollection";
import GiftGuide from "../components/GiftGuide";
import GiftFinder from "../components/GiftFinder";
import EmotionalStory from "../components/EmotionalStory";
import BudgetShop from "../components/BudgetShop";
import Reviews from "../components/Reviews";
import Personalization from "../components/Personalization";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf8] text-[#3f202b]">
      <Navbar />
      <Hero />
      <TrustSection />
      <OccasionGrid />
      <ProductCollection />
      <GiftGuide />
      <GiftFinder />
      <EmotionalStory />
      <BudgetShop />
      <Reviews />
      <Personalization />
    </main>
  );
}
