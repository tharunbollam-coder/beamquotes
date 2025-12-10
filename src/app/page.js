import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeContent from "@/components/HomeContent";
import { getFeaturedQuotes } from "@/sanity/lib/queries";

// Revalidate every 60 seconds (ISR - Incremental Static Regeneration)
export const revalidate = 60;

export const metadata = {
  title: "Quotes - Discover Inspiring Quotes Daily",
  description:
    "Find powerful quotes from great minds. Share, save, and get daily inspiration.",
};

async function Home() {
  let quotes = [];
  let error = null;

  try {
    quotes = await getFeaturedQuotes();
  } catch (err) {
    console.error("Error fetching featured quotes:", err);
    error = "Failed to load quotes. Please try again later.";
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />
      <HomeContent quotes={quotes} />
      <Footer />
    </div>
  );
}

export default Home;
