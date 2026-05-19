import { features } from "@/app/data/cleanTechFeturesData";

export default function CleanTechFeatures() {
  return (
    <section className="py-12 lg:py-20 bg-white border border-gray-200 rounded-1xl">
      <div className="mx-4 md:mx-6 lg:mx-10 xl:mx-auto max-w-7xl">
        {/* Intro Section */}
        <div className="text-center mb-16 lg:mb-20 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Clean Technology Features
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Innovative Solutions for a{" "}
            <span className="text-green-600">Sustainable Future</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="space-y-12 lg:space-y-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              {/* Feature Card */}
              <div className="w-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-green-200">
                <div className=" grid w-full grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mx-auto px-6 py-8 lg:py-12 ">
                  {/* Text Content */}
                  <div
                    className={`flex flex-col justify-center space-y-4 lg:space-y-6 ${
                      index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                      <div className="text-sm font-medium text-green-600 uppercase tracking-wide">
                        {feature.title.replace("-", " ")}
                      </div>
                    </div>

                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                      {feature.title} Feature
                    </h3>

                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div
                    className={`flex justify-center items-center ${
                      index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative w-full max-w-md lg:max-w-full">
                      <img
                        className="w-full h-auto  shadow-md object-cover group-hover:scale-105 transition-transform duration-500"
                        src={feature.img}
                        alt={feature.title}
                        loading="lazy"
                      />
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-linear-to-r from-white/10 to-transparent rounded-xl group-hover:opacity-0 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Minimal Divider */}
              {index < features.length - 1 && (
                <div className="flex justify-center mt-12 lg:mt-16">
                  <div className="w-24 h-1 bg-linear-to-r from-green-400 to-green-600 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
