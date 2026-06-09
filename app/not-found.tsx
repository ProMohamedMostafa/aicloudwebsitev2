export default function NotFound() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 Badge */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <div className="relative inline-flex items-center justify-center w-32 h-32 bg-linear-to-br from-indigo-600 to-purple-600 rounded-full shadow-2xl">
            <span className="text-4xl font-bold text-white">404</span>
          </div>
        </div>

        {/* Main Heading with Gradient */}
        <h1 className="text-4xl sm:text-6xl font-bold bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
          Page Not Found
        </h1>

        {/* Descriptive Text */}
        <p className="text-xl text-gray-600 mb-4 leading-relaxed">
          Oops! The page you're looking for seems to have wandered off into the
          digital void.
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-md mx-auto">
          Don't worry, even the best explorers sometimes take wrong turns. Let's
          get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="/"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-linear-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-200 min-w-[200px]"
          >
            <span className="relative">Go Home</span>
            <svg
              className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>
        </div>

        {/* Additional Help Section */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 mb-4">
            While you're here, you might want to:
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <a
              href="/services"
              className="text-indigo-600 hover:text-indigo-500 transition-colors duration-200 hover:underline"
            >
              Our Services
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="/about"
              className="text-indigo-600 hover:text-indigo-500 transition-colors duration-200 hover:underline"
            >
              About Us
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="/contact"
              className="text-indigo-600 hover:text-indigo-500 transition-colors duration-200 hover:underline"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce"></div>
        <div
          className="absolute bottom-10 right-10 w-20 h-20 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
    </main>
  );
}
