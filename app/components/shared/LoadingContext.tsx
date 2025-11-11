"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("loading-active");
      document.body.classList.remove("loading-complete");
    } else {
      document.body.classList.remove("loading-active");
      document.body.classList.add("loading-complete");
    }

    return () => {
      document.body.classList.remove("loading-active", "loading-complete");
    };
  }, [isLoading]);

  useEffect(() => {
    // Only run on initial load
    if (isInitialLoad) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsInitialLoad(false);
      }, 2000); // Reduced time for better UX

      return () => clearTimeout(timer);
    }
  }, [isInitialLoad]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
