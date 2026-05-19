export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Custom, responsive web applications built with cutting-edge technologies for optimal performance and user experience.",
    icon: "🌐",
    features: [
      "React/Next.js",
      "TypeScript",
      "Responsive Design",
      "SEO Optimized",
    ],
  },
  {
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
    icon: "📱",
    features: [
      "iOS & Android",
      "Cross-Platform",
      "Native Performance",
      "App Store Ready",
    ],
  },
  {
    title: "IoT Solutions",
    description:
      "Smart connected devices and IoT ecosystems that transform data into actionable insights.",
    icon: "🔗",
    features: [
      "Smart Devices",
      "Real-time Data",
      "Cloud Integration",
      "Analytics Dashboard",
    ],
  },
  {
    title: "AI Integration",
    description:
      "Intelligent solutions powered by machine learning and artificial intelligence.",
    icon: "🤖",
    features: ["Machine Learning", "AI Models", "Data Analysis", "Automation"],
  },
  {
    title: "Cloud Services",
    description:
      "Scalable cloud infrastructure and deployment solutions for modern applications.",
    icon: "☁️",
    features: [
      "AWS/Azure",
      "Scalable Infrastructure",
      "DevOps",
      "CI/CD Pipelines",
    ],
  },
  {
    title: "UX/UI Design",
    description:
      "Human-centered design solutions that create intuitive and engaging digital products.",
    icon: "🎨",
    features: [
      "User Research",
      "Prototyping",
      "UI Design",
      "Usability Testing",
    ],
  },
];
