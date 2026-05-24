"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  // Detect mobile screen size
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Handle scroll for background transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    if (!isMobile && menuOpen) setMenuOpen(false);
  }, [isMobile, menuOpen]);

  const handleProductsClick = () => {
    if (isMobile) setProductsOpen(!productsOpen);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link href="/" className="logo-link" onClick={closeMobileMenu}>
            <img
              src="/assets/images/ai_logo.svg"
              className="logo"
              alt="AI Cloud Logo"
            />
          </Link>

          {/* Right side buttons */}
          <div className="nav-actions">
            <Link href="/contact" className="contact-btn">
              Contact Us
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`menu-btn ${menuOpen ? "open" : ""}`}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <div className="menu-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>

          {/* Menu links */}
          <div className={`menu ${menuOpen ? "open" : ""}`}>
            <ul className="menu-list">
              <li>
                <Link href="/" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="dropdown" ref={dropdownRef}>
                <button
                  onClick={handleProductsClick}
                  className="dropdown-btn"
                  aria-expanded={productsOpen}
                >
                  Products
                  <svg
                    className={`dropdown-icon ${productsOpen ? "open" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className={`dropdown-menu ${productsOpen ? "open" : ""}`}>
                  <ul>
                    <li>
                      <Link href="/products/ai" onClick={closeMobileMenu}>
                        AI Tools
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/cloud" onClick={closeMobileMenu}>
                        Cloud Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/analytics"
                        onClick={closeMobileMenu}
                      >
                        Analytics
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link href="/services" onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/partners" onClick={closeMobileMenu}>
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={closeMobileMenu}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
