export interface Feature {
  title: string;
  description: string;
  img: string;
}

export const features: Feature[] = [
  {
    title: "home",
    img: "/assets/images/home-desktop.png",
    description:
      "The main dashboard gives a quick overview of key metrics through charts and insights. Accessible on both desktop and mobile, it helps users make informed decisions at a glance.",
  },
  {
    title: "user-management",
    img: "/assets/images/user-management-desktop.png",
    description:
      "Easily manage users, roles, and access permissions. Add new users, edit profiles, and monitor account statuses — all from a clean, organized interface.",
  },
  {
    title: "task",
    img: "/assets/images/task-desktop.png",
    description:
      "Create, assign, and track tasks across your team. View progress, set priorities, and ensure smooth workflow management from any device.",
  },
  {
    title: "stock-management",
    img: "/assets/images/stock-management-desktop.png",
    description:
      "Monitor and control your inventory in real time. View available quantities, item details, and improve supply accuracy with smart stock tracking.",
  },
];
