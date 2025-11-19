"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface ContactUsButtonProps {
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  href?: string;
}

export default function ContactUsButton({
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  showIcon = true,
  href = "/contact",
}: ContactUsButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default behavior: navigate to contact page
      router.push(href);
    }
  };

  const baseStyles =
    "flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#0179ba] to-[#0079b9] text-white shadow-lg hover:shadow-xl",
    secondary: "bg-white text-[#0179ba] shadow-lg hover:shadow-xl",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const arrowIcon = (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  );

  return (
    <motion.button
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      Contact Us
      {showIcon && arrowIcon}
    </motion.button>
  );
}
