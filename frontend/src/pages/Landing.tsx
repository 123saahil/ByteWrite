import { BookOpen, Sparkles, Users } from "lucide-react";
import { Appbar } from "../components/Appbar";

export const Landing = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <Appbar />

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-snug max-w-4xl text-black">
          Write, Read, and Understand{" "}
          <span className="text-gray-700">Better</span>
        </h1>
        <p className="mt-6 text-gray-600 max-w-2xl text-lg">
          ByteWrite is where thoughtful writing meets intelligent reading.
          Create compelling blogs and instantly summarize any content with our
          AI-powered tools.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 max-w-6xl w-full">
          <div className="flex flex-col items-center">
            <BookOpen className="w-14 h-14 text-gray-800 mb-4" />
            <h3 className="text-lg font-semibold text-black">Create & Publish</h3>
            <p className="text-gray-500 mt-2 text-base max-w-xs">
              Write beautiful blogs with our intuitive editor and share your
              thoughts with the world.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Sparkles className="w-14 h-14 text-gray-800 mb-4" />
            <h3 className="text-lg font-semibold text-black">AI Summarizer</h3>
            <p className="text-gray-500 mt-2 text-base max-w-xs">
              Get instant, intelligent summaries of any blog post with our
              advanced AI technology.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Users className="w-14 h-14 text-gray-800 mb-4" />
            <h3 className="text-lg font-semibold text-black">Discover Content</h3>
            <p className="text-gray-500 mt-2 text-base max-w-xs">
              Explore a curated feed of quality content from writers around the
              globe.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex space-x-6 mt-12">
          <button className="bg-black text-white px-8 py-4 rounded-lg text-lg shadow hover:bg-gray-900 transition">
            Start Writing
          </button>
          <button className="border border-gray-400 text-black px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition">
            Explore Blogs
          </button>
        </div>

        {/* Featured Banner */}
        <div className="bg-gray-100 text-gray-700 rounded-lg p-6 mt-12 max-w-3xl w-full flex items-center justify-center space-x-3">
          <Sparkles className="text-black w-6 h-6" />
          <p className="text-base">
            <strong>Featured</strong> — Try our AI summarizer on any blog post —
            get the key insights in seconds, not minutes.
          </p>
        </div>
      </main>
    </div>
  );
};
