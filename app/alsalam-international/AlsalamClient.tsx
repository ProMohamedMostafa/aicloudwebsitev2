"use client";

import { useEffect, useState } from "react";
import AlsalamPage from "../components/alsalam/AlsalamPage";

export default function AlsalamClient() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Keep the loader up until the page (including images) is ready,
    // with a short minimum so it doesn't just flash on fast connections.
    const minDelay = new Promise((resolve) => setTimeout(resolve, 500));
    const pageReady =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            window.addEventListener("load", () => resolve(), { once: true });
          });

    Promise.all([minDelay, pageReady]).then(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="h-16 w-16 animate-spin rounded-full border-b-4 border-t-4 border-blue-500"></div>
        </div>
      )}
      <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
        <AlsalamPage />
      </div>
    </>
  );
}
