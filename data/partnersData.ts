export interface Partner {
  title: string;
  img: string;
}

export const partners: Partner[] = [
  {
    title: "saudi water authority",
    img: new URL("../public/assets/images/company-Logo-1.png", import.meta.url)
      .href,
  },
  {
    title: "abha private hospital",
    img: new URL("../public/assets/images/company-Logo-2.png", import.meta.url)
      .href,
  },
  {
    title: "ministry of health",
    img: new URL("../public/assets/images/company-Logo-3.png", import.meta.url)
      .href,
  },
  {
    title: "princess nourah university",
    img: new URL("../public/assets/images/company-Logo-4.png", import.meta.url)
      .href,
  },
  {
    title: "King Abdullah Financial District",
    img: new URL("../public/assets/images/company-Logo-5.png", import.meta.url)
      .href,
  },
  {
    title: "public investment fund",
    img: new URL("../public/assets/images/company-Logo-6.png", import.meta.url)
      .href,
  },
];
