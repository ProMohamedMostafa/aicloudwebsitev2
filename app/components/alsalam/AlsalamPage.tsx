import AlsalamHero from "./alsalam-hero/AlsalamHero";
import AlsalamHowItWorks from "./alsalam-how-it-works/AlsalamHowItWorks";
import AlsalamChallenges from "./alsalam-challenges/AlsalamChallenges";
import AlsalamFeatures from "./alsalam-features/AlsalamFeatures";
import AlsalamShipmentManagement from "./alsalam-shipment-management/AlsalamShipmentManagement";
import AlsalamFinalCTA from "./alsalam-final-cta/AlsalamFinalCTA";

// Parent landing page component for "Alsalam International".
// Add each new section below as its design is provided.
export default function AlsalamPage() {
  return (
    <div className="alsalam-page w-full">
      <AlsalamHero />
      <div className="h-4 w-full bg-white md:h-6 lg:h-8" aria-hidden="true" />
      <AlsalamHowItWorks />
      <AlsalamChallenges />
      <AlsalamFeatures />
      <AlsalamShipmentManagement />
      <AlsalamFinalCTA />
    </div>
  );
}
