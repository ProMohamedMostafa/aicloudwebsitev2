export default function About() {
  return (
    <div className="bg-white py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            About AI Cloud
          </span>
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mt-4 mb-6">
            Transforming Operations
            <br />
            with Intelligence
          </h1>
        </div>

        <div className="prose prose-lg mx-auto">
          <p className="text-xl text-gray-600 leading-relaxed text-center mb-12">
            At AI Cloud, we are reimagining how operations are managed across
            sectors. Our intelligent platforms like Clean Tech bring together
            IoT sensors, AI-powered analytics, and user-friendly dashboards to
            optimize cleanliness, maintenance, and resource management in
            real-time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: "🔍", title: "IoT Sensors", desc: "Real-time monitoring" },
            { icon: "🧠", title: "AI Analytics", desc: "Smart insights" },
            {
              icon: "📈",
              title: "Dashboards",
              desc: "User-friendly interface",
            },
          ].map((item, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
