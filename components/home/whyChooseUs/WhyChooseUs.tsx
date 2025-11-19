export default function WhyChooseUs() {
  return (
    <div className="bg-white py-24 px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
              Software Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver cutting-edge software that drives your business forward
            with innovation, quality, and exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "🚀",
              title: "Agile Development",
              description:
                "Iterative approach ensuring fast delivery and continuous improvement throughout development cycles.",
            },
            {
              icon: "🛡️",
              title: "Secure & Scalable",
              description:
                "Enterprise-grade security with architecture designed to scale with your growing business needs.",
            },
            {
              icon: "⚡",
              title: "High Performance",
              description:
                "Optimized code and modern frameworks ensuring lightning-fast applications and optimal user experience.",
            },
            {
              icon: "🔧",
              title: "Custom Solutions",
              description:
                "Tailored software development addressing your unique business challenges and specific requirements.",
            },
            {
              icon: "📱",
              title: "Cross-Platform",
              description:
                "Seamless experiences across all devices and platforms with responsive design and native capabilities.",
            },
            {
              icon: "🔄",
              title: "Continuous Support",
              description:
                "Comprehensive maintenance, updates, and technical support long after project delivery.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-white to-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
