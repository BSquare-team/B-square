import Link from "next/link";

export default function CategorySection() {
  return (
    <section className="px-6 mt-12 lg:mt-16">
      <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-gray-950 dark:via-gray-900 dark:to-black shadow-2xl border border-gray-800/50 transition-all duration-500 hover:shadow-2xl dark:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.05)] dark:hover:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.08)]">
        {/* Subtle animated gradient overlay (purely decorative) */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 animate-pulse pointer-events-none"></div>

        <div className="relative p-8 md:p-12 lg:p-16 flex flex-col items-center text-center">
          {/* Eyebrow / Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 text-xs font-mono font-medium text-gray-300 uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Live & Open
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl">
            What We Are{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Working On
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mt-6 leading-relaxed">
            Stay up to date with our latest progress, features, and
            behind-the-scenes updates. We continuously improve our platform —
            heres whats new right now.
          </p>

          {/* Feature highlights as mini badges/stats */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              "📦 2 Active Projects",
              "🔄 15+ Updates This Month",
              "🌍 100% Free Access",
            ].map((feature) => (
              <span
                key={feature}
                className="text-sm font-medium text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="mt-12">
            <Link
              href="/blog/changelog"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r
               from-blue-600 to-indigo-600 text-white
               rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 
               transition-all duration-300 hover:scale-105 focus:ring-2
                focus:ring-blue-500 focus:outline-none"
            >
              <span>Explore the latest updates</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
