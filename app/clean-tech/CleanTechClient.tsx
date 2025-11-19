"use client";

import { useState, useEffect } from "react";
import CleanTechLoader from "../../components/shared/CleanTechLoader";
import CleanTechHero from "../../components/clean-tech/cleanTech-hero/CleanTechHero";
import CleanTechAbout from "../../components/clean-tech/cleanTech-about/CleanTechAbout";
import CleanTechFeatures from "../../components/clean-tech/cleanTech-features/CleanTechFeatures";
import CleanTechContact from "../../components/clean-tech/cleanTech-contact/CleanTechContact";
import "./CleanTechPage.css"; // ✅ central styles

export default function CleanTechClient() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CleanTechLoader />

      {!isLoading && (
        <div className="clean-tech-page relative min-h-screen text-white overflow-hidden">
          <div className="bg-grid"></div>
          <div className="relative z-10">
            <CleanTechHero />
            <CleanTechAbout />
            <CleanTechFeatures />
            <CleanTechContact />
          </div>
        </div>
      )}
    </>
  );
}
