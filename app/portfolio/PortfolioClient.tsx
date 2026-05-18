"use client";

import "./PortfolioPage.css";
import PortfolioHero from "../../components/portfolio/portfolio-hero/PortfolioHero";
import PortfolioEcosystem from "../../components/portfolio/portfolio-ecosystem/PortfolioEcosystem";
import PortfolioBusinessTypes from "../../components/portfolio/portfolio-business-types/PortfolioBusinessTypes";
import PortfolioFeatures from "../../components/portfolio/portfolio-features/PortfolioFeatures";
import PortfolioMobileCommerce from "../../components/portfolio/portfolio-mobile-commerce/PortfolioMobileCommerce";
import PortfolioWhyUs from "../../components/portfolio/portfolio-why-us/PortfolioWhyUs";
import PortfolioCTA from "../../components/portfolio/portfolio-cta/PortfolioCTA";

export default function PortfolioClient() {
  return (
    <div className="portfolio-page">
      <PortfolioHero />
      <PortfolioEcosystem />
      <PortfolioBusinessTypes />
      <PortfolioFeatures />
      <PortfolioMobileCommerce />
      <PortfolioWhyUs />
      <PortfolioCTA />
    </div>
  );
}
