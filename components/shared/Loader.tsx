"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-zinc-900 transition-opacity duration-500">
      <div className="relative">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

        {/* Optional: Loading text */}
        <div className="mt-4 text-center">
          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
}
