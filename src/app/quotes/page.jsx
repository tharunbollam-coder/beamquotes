import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuotesPageContent from "@/components/QuotesPageContent";
import { getAllQuotes } from "@/sanity/lib/queries";

// Revalidate every 60 seconds (ISR - Incremental Static Regeneration)
export const revalidate = 60;

export const metadata = {
  title: "All Quotes | Quotes - Search & Filter Inspiring Quotes",
  description:
    "Browse our complete collection of inspiring quotes. Search by author, text, or category. Find the perfect quote for your creative projects.",
  keywords: [
    "quotes",
    "search quotes",
    "filter quotes",
    "inspiration",
    "motivation",
  ],
};

async function QuotesPage() {
  let quotes = [];
  let error = null;

  try {
    quotes = await getAllQuotes();
  } catch (err) {
    console.error("Error fetching quotes:", err);
    error = "Failed to load quotes. Please try again later.";
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />
      <QuotesPageContent quotes={quotes} />
      <Footer />
    </div>
  );
}

export default QuotesPage;
