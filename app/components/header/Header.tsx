"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useI18n } from "@/app/i18n/context";
import "./Header.css";

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
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

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <div className="navbar-container">
          <Link href="/" className="logo-link" onClick={closeMobileMenu}>
            <img src="/assets/images/ai_logo.svg" className="logo" alt="AI Cloud Logo" />
          </Link>

          <div className="nav-actions">
            <button className="lang-btn" onClick={() => setLang(lang === "en" ? "ar" : "en")}>
              🌐 {t("lang.switchTo")}
            </button>
            <Link href="/contact" className="contact-btn">{t("header.contact")}</Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className={`menu-btn ${menuOpen ? "open" : ""}`} aria-label="Toggle menu" aria-expanded={menuOpen}>
              <div className="menu-icon"><span></span><span></span><span></span></div>
            </button>
          </div>

          <div className={`menu ${menuOpen ? "open" : ""}`}>
            <ul className="menu-list">
              <li><Link href="/" onClick={closeMobileMenu}>{t("header.home")}</Link></li>
              <li className="dropdown" ref={dropdownRef}>
                <button onClick={handleProductsClick} className="dropdown-btn" aria-expanded={productsOpen}>
                  {t("header.products")}
                  <svg className={`dropdown-icon ${productsOpen ? "open" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`dropdown-menu ${productsOpen ? "open" : ""}`}>
                  <ul>
                    <li><Link href="/products/ai" onClick={closeMobileMenu}>{t("header.aiTools")}</Link></li>
                    <li><Link href="/products/cloud" onClick={closeMobileMenu}>{t("header.cloudServices")}</Link></li>
                    <li><Link href="/products/analytics" onClick={closeMobileMenu}>{t("header.analytics")}</Link></li>
                  </ul>
                </div>
              </li>
              <li><Link href="/services" onClick={closeMobileMenu}>{t("header.services")}</Link></li>
              <li><Link href="/partners" onClick={closeMobileMenu}>{t("header.partners")}</Link></li>
              <li><Link href="/about" onClick={closeMobileMenu}>{t("header.about")}</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
