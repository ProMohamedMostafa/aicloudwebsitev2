"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => { setIsMounted(true); }, []);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isMobile && menuOpen) setMenuOpen(false);
  }, [isMobile, menuOpen]);

  const handleProductsClick = () => { if (isMobile) setProductsOpen(!productsOpen); };

  const closeMobileMenu = () => { setMenuOpen(false); setProductsOpen(false); };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? "hidden" : "unset";
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""} ${isMounted ? "mounted" : ""}`}>
      <nav className="navbar">
        <div className="navbar-container">
          <Link href="/" className="logo-link" onClick={closeMobileMenu}>
            <div className="logo-wrapper">
              <Image src="/assets/images/ai_logo.svg" className="logo" alt="AI Cloud Logo" width={40} height={40} priority />
            </div>
          </Link>

          <div className="nav-actions">
            <Link href="/contact" className="contact-btn">
              <span className="btn-text">Contact Us</span>
              <div className="btn-hover-effect"></div>
            </Link>
            <button onClick={handleMenuToggle} className={`menu-btn ${menuOpen ? "open" : ""}`} aria-label="Toggle menu" aria-expanded={menuOpen}>
              <div className="menu-icon"><span></span><span></span><span></span></div>
            </button>
          </div>

          <div className={`menu ${menuOpen ? "open" : ""}`}>
            <ul className="menu-list">
              <li className="menu-item">
                <Link href="/" onClick={closeMobileMenu} className="menu-link">
                  <span className="link-text">Home</span>
                  <div className="link-underline"></div>
                </Link>
              </li>

              <li className="dropdown menu-item" ref={dropdownRef}>
                <button onClick={handleProductsClick} className="dropdown-btn menu-link" aria-expanded={productsOpen}>
                  <span className="link-text">Products</span>
                  <svg className={`dropdown-icon ${productsOpen ? "open" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                  <div className="link-underline"></div>
                </button>
                <div className={`dropdown-menu ${productsOpen ? "open" : ""}`}>
                  <ul>
                    <li className="dropdown-item">
                      <Link href="/clean-tech" onClick={closeMobileMenu} className="dropdown-link">
                        <Image src="/assets/images/cleanTech-logo.svg" alt="CleanTech Logo" className="cleantech-logo" width={80} height={24} />
                        <div className="dropdown-link-underline"></div>
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link href="/portfolio" onClick={closeMobileMenu} className="dropdown-link dropdown-link--portfolio">
                        <div className="portfolio-nav-item">
                          <div className="portfolio-nav-icon">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                              <rect x="1" y="1" width="8" height="8" rx="1.5" stroke="#0061B7" strokeWidth="1.8" fill="none"/>
                              <rect x="13" y="1" width="8" height="8" rx="1.5" stroke="#0061B7" strokeWidth="1.8" fill="none"/>
                              <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="#0061B7" strokeWidth="1.8" fill="none"/>
                              <rect x="1" y="13" width="8" height="8" rx="1.5" stroke="#0061B7" strokeWidth="1.8" fill="none"/>
                            </svg>
                          </div>
                          <span className="portfolio-nav-label">E-Commerce Portfolio</span>
                        </div>
                        <div className="dropdown-link-underline"></div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="menu-item">
                <Link href="/services" onClick={closeMobileMenu} className="menu-link">
                  <span className="link-text">Services</span>
                  <div className="link-underline"></div>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/partners" onClick={closeMobileMenu} className="menu-link">
                  <span className="link-text">Partners</span>
                  <div className="link-underline"></div>
                </Link>
              </li>
              <li className="menu-item">
                <Link href="/about" onClick={closeMobileMenu} className="menu-link">
                  <span className="link-text">About Us</span>
                  <div className="link-underline"></div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
