"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Lightbulb, Users, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen text-gray-900 flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About BeamQuotes
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Discover the power of words. Our mission is to inspire, motivate,
            and transform lives through carefully curated quotes from the
            world's most influential thinkers and leaders.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To provide a comprehensive platform where people can discover,
              share, and find daily inspiration through meaningful quotes. We
              believe that the right words at the right time can change
              perspectives and spark positive action.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Lightbulb className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To create a global community of inspired individuals who leverage
              the wisdom of great minds to achieve their goals, overcome
              challenges, and build better versions of themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Why Choose BeamQuotes?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <Heart className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Carefully Curated
                  </h3>
                  <p className="text-gray-600">
                    Every quote is hand-picked to ensure quality, relevance, and
                    inspirational value for our community.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Community Driven
                  </h3>
                  <p className="text-gray-600">
                    Join thousands of users who share, discuss, and find daily
                    inspiration from our growing collection.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Easy to Search
                  </h3>
                  <p className="text-gray-600">
                    Advanced filtering by category, author, and powerful search
                    functionality to find exactly what you need.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-600 text-white">
                    <Target className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Daily Inspiration
                  </h3>
                  <p className="text-gray-600">
                    Get inspired every day with quotes from wisdom leaders,
                    entrepreneurs, philosophers, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Inspirational Authors */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Featured Authors
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Author 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-200">
              <div className="mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 mx-auto flex items-center justify-center text-white font-bold text-2xl">
                  SJ
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Steve Jobs
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Visionary entrepreneur and co-founder of Apple
              </p>
              <p className="text-gray-700 italic text-sm">
                "The only way to do great work is to love what you do."
              </p>
            </div>

            {/* Author 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-200">
              <div className="mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 mx-auto flex items-center justify-center text-white font-bold text-2xl">
                  MA
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Maya Angelou
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Celebrated poet, memoirist, and civil rights activist
              </p>
              <p className="text-gray-700 italic text-sm">
                "I've learned that people will forget what you said and what you
                did, but people will never forget how you made them feel."
              </p>
            </div>

            {/* Author 3 */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-amber-200">
              <div className="mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 mx-auto flex items-center justify-center text-white font-bold text-2xl">
                  AE
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Albert Einstein
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Theoretical physicist and Nobel Prize winner
              </p>
              <p className="text-gray-700 italic text-sm">
                "Imagination is more important than knowledge. Knowledge is
                limited."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Inspiration Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore thousands of quotes, discover new perspectives, and find the
            words that resonate with your journey.
          </p>
          <a
            href="/quotes"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors duration-300 shadow-lg"
          >
            Browse All Quotes
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
