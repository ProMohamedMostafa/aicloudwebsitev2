"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import "./Header.css";
import { useI18n } from "@/app/i18n/context";

// Focusable element selector for focus trapping
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const productsBtnRef = useRef<HTMLButtonElement>(null);
  const langBtnRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const { t, lang, setLang, dir } = useI18n();

  // Helper: check if a link is the active route
  const isActive = (href: string) => pathname === href;

  // Prevent scroll on body when mobile menu is open
  const lockScroll = useCallback(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }, []);

  // Focus trap for mobile menu
  const trapFocus = useCallback((e: KeyboardEvent) => {
    if (!mobileMenuRef.current) return;

    const focusableElements =
      mobileMenuRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.key === "Tab") {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  }, []);

  // Close all overlays (mobile menu, dropdowns) and unlock scroll
  const closeAll = useCallback(() => {
    setMenuOpen(false);
    setProductsOpen(false);
    setLangOpen(false);
    unlockScroll();
  }, [unlockScroll]);

  // Close desktop dropdowns
  const closeDesktopDropdowns = useCallback(() => {
    setProductsOpen(false);
    setLangOpen(false);
  }, []);

  // Mount detection to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) {
        closeAll();
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize, { passive: true });
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [closeAll]);

  // Handle scroll state
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside for all overlays
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Close products dropdown if clicking outside
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        productsBtnRef.current &&
        !productsBtnRef.current.contains(target)
      ) {
        setProductsOpen(false);
      }

      // Close language dropdown if clicking outside
      if (
        langRef.current &&
        !langRef.current.contains(target) &&
        langBtnRef.current &&
        !langBtnRef.current.contains(target)
      ) {
        setLangOpen(false);
      }

      // Close mobile menu if clicking outside (and menu is open)
      if (
        menuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        menuBtnRef.current &&
        !menuBtnRef.current.contains(target)
      ) {
        closeAll();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, closeAll]);

  // Handle keyboard events globally
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key closes everything
      if (e.key === "Escape") {
        // If mobile menu is open, close it first
        if (menuOpen) {
          closeAll();
          menuBtnRef.current?.focus();
          return;
        }
        // Then close desktop dropdowns
        closeDesktopDropdowns();
        // Return focus to trigger button
        if (productsOpen) productsBtnRef.current?.focus();
        if (langOpen) langBtnRef.current?.focus();
        return;
      }

      // Trap focus in mobile menu
      if (menuOpen && e.key === "Tab") {
        trapFocus(e);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    menuOpen,
    productsOpen,
    langOpen,
    closeAll,
    closeDesktopDropdowns,
    trapFocus,
  ]);

  // Handle mobile menu open/close
  const handleMenuToggle = useCallback(() => {
    const nextState = !menuOpen;
    if (nextState) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      setMenuOpen(true);
      setProductsOpen(false);
      setLangOpen(false);
      lockScroll();
      // Focus first item in menu after animation
      setTimeout(() => {
        const firstLink =
          mobileMenuRef.current?.querySelector<HTMLElement>("a[href], button");
        firstLink?.focus();
      }, 100);
    } else {
      closeAll();
      previousFocusRef.current?.focus();
    }
  }, [menuOpen, lockScroll, closeAll]);

  const closeMobileMenu = useCallback(() => {
    closeAll();
    previousFocusRef.current?.focus();
  }, [closeAll]);

  // Handle products toggle
  const handleProductsClick = useCallback(() => {
    if (isMobile) {
      setProductsOpen((prev) => !prev);
    } else {
      setProductsOpen((prev) => !prev);
      setLangOpen(false);
    }
  }, [isMobile]);

  // Handle products hover for desktop
  const handleProductsMouseEnter = useCallback(() => {
    if (!isMobile) {
      setProductsOpen(true);
      setLangOpen(false);
    }
  }, [isMobile]);

  const handleProductsMouseLeave = useCallback(() => {
    if (!isMobile) {
      // Small delay to allow moving to dropdown
      setTimeout(() => {
        // Check if mouse is not over dropdown or button
        if (
          dropdownRef.current &&
          !dropdownRef.current.matches(":hover") &&
          productsBtnRef.current &&
          !productsBtnRef.current.matches(":hover")
        ) {
          setProductsOpen(false);
        }
      }, 100);
    }
  }, [isMobile]);

  // Handle dropdown menu mouse events
  const handleDropdownMouseEnter = useCallback(() => {
    if (!isMobile) {
      setProductsOpen(true);
    }
  }, [isMobile]);

  const handleDropdownMouseLeave = useCallback(() => {
    if (!isMobile) {
      setProductsOpen(false);
    }
  }, [isMobile]);

  // Language switch
  const handleLangSwitch = useCallback(
    (newLang: "en" | "ar") => {
      setLang(newLang);
      setLangOpen(false);
      langBtnRef.current?.focus();
    },
    [setLang],
  );

  const handleLangToggle = useCallback(() => {
    setLangOpen((prev) => !prev);
    if (!isMobile) setProductsOpen(false);
  }, [isMobile]);

  // Products dropdown keyboard handler
  const handleProductsKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isMobile && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        handleProductsClick();
      }
    },
    [isMobile, handleProductsClick],
  );

  return (
    <header
      ref={headerRef}
      className={`header ${scrolled ? "scrolled" : ""} ${isMounted ? "mounted" : ""}`}
      dir={dir}
    >
      <nav
        className="navbar"
        aria-label={t("header.mainNav") || "Main navigation"}
      >
        <div className="navbar-container">
          {/* Logo */}
          <Link
            href="/"
            className={`logo-link ${isActive("/") ? "logo-link--active" : ""}`}
            onClick={closeMobileMenu}
            aria-label={t("header.home") || "Home"}
          >
            <div className="logo-wrapper">
              <Image
                src="/assets/images/ai_logo.svg"
                className="logo"
                alt="AI Cloud Logo"
                width={40}
                height={40}
                priority
              />
            </div>
          </Link>

          {/* Desktop + Mobile Nav */}
          <div
            ref={mobileMenuRef}
            className={`menu ${menuOpen ? "open" : ""}`}
            id="mobile-menu"
            role={isMobile ? "dialog" : undefined}
            aria-modal={isMobile ? menuOpen : undefined}
            aria-label={
              isMobile ? t("header.mobileMenu") || "Mobile menu" : undefined
            }
          >
            <ul className="menu-list" role="list">
              {/* Home */}
              <li className="menu-item">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className={`menu-link ${isActive("/") ? "active" : ""}`}
                  aria-current={isActive("/") ? "page" : undefined}
                >
                  <span className="link-text">{t("header.home")}</span>
                  <div className="link-underline"></div>
                </Link>
              </li>

              {/* Products Dropdown */}
              <li
                className="dropdown menu-item"
                ref={dropdownRef}
                onMouseEnter={handleProductsMouseEnter}
                onMouseLeave={handleProductsMouseLeave}
              >
                <button
                  ref={productsBtnRef}
                  onClick={handleProductsClick}
                  onKeyDown={handleProductsKeyDown}
                  className="dropdown-btn menu-link"
                  aria-expanded={productsOpen}
                  aria-haspopup="true"
                  aria-controls="products-dropdown"
                >
                  <span className="link-text">{t("header.products")}</span>
                  <svg
                    className={`dropdown-icon ${productsOpen ? "open" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    width="18"
                    height="18"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <div className="link-underline"></div>
                </button>
                <div
                  id="products-dropdown"
                  className={`dropdown-menu ${productsOpen ? "open" : ""}`}
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <ul role="list">
                    <li className="dropdown-item">
                      <Link
                        href="/clean-tech"
                        onClick={closeMobileMenu}
                        className="dropdown-link"
                      >
                        <Image
                          src="/assets/images/cleanTech-logo.svg"
                          alt="CleanTech"
                          className="cleantech-logo"
                          width={80}
                          height={24}
                        />
                        <div className="dropdown-link-underline"></div>
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link
                        href="/portfolio"
                        onClick={closeMobileMenu}
                        className="dropdown-link dropdown-link--portfolio"
                      >
                        <div className="portfolio-nav-item">
                          <div
                            className="portfolio-nav-icon"
                            aria-hidden="true"
                          >
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <rect
                                x="1"
                                y="1"
                                width="8"
                                height="8"
                                rx="1.5"
                                stroke="#0061B7"
                                strokeWidth="1.8"
                                fill="none"
                              />
                              <rect
                                x="13"
                                y="1"
                                width="8"
                                height="8"
                                rx="1.5"
                                stroke="#0061B7"
                                strokeWidth="1.8"
                                fill="none"
                              />
                              <rect
                                x="13"
                                y="13"
                                width="8"
                                height="8"
                                rx="1.5"
                                stroke="#0061B7"
                                strokeWidth="1.8"
                                fill="none"
                              />
                              <rect
                                x="1"
                                y="13"
                                width="8"
                                height="8"
                                rx="1.5"
                                stroke="#0061B7"
                                strokeWidth="1.8"
                                fill="none"
                              />
                            </svg>
                          </div>
                          <span className="portfolio-nav-label">
                            {t("header.ecommerce")}
                          </span>
                        </div>
                        <div className="dropdown-link-underline"></div>
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <Link
                        href="/alsalam-international"
                        onClick={closeMobileMenu}
                        className="dropdown-link dropdown-link--portfolio"
                      >
                        <div className="portfolio-nav-item">
                          <div
                            className="portfolio-nav-icon"
                            aria-hidden="true"
                          >
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <path
                                d="M2.5 13.5L4 8h14l1.5 5.5c0 2.2-1.8 3.5-4 3.5H6.5c-2.2 0-4-1.3-4-3.5z"
                                stroke="#006738"
                                strokeWidth="1.6"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8 8V3.5h6V8"
                                stroke="#006738"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <span className="portfolio-nav-label">
                            {t("header.alsalam")}
                          </span>
                        </div>
                        <div className="dropdown-link-underline"></div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Services */}
              <li className="menu-item">
                <Link
                  href="/services"
                  onClick={closeMobileMenu}
                  className={`menu-link ${isActive("/services") ? "active" : ""}`}
                  aria-current={isActive("/services") ? "page" : undefined}
                >
                  <span className="link-text">{t("header.services")}</span>
                  <div className="link-underline"></div>
                </Link>
              </li>

              {/* Partners */}
              <li className="menu-item">
                <Link
                  href="/partners"
                  onClick={closeMobileMenu}
                  className={`menu-link ${isActive("/partners") ? "active" : ""}`}
                  aria-current={isActive("/partners") ? "page" : undefined}
                >
                  <span className="link-text">{t("header.partners")}</span>
                  <div className="link-underline"></div>
                </Link>
              </li>

              {/* About */}
              <li className="menu-item">
                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className={`menu-link ${isActive("/about") ? "active" : ""}`}
                  aria-current={isActive("/about") ? "page" : undefined}
                >
                  <span className="link-text">{t("header.about")}</span>
                  <div className="link-underline"></div>
                </Link>
              </li>

              {/* Mobile Contact Button - Only visible on mobile */}
              <li className="menu-item mobile-contact-item">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="menu-link mobile-contact-link"
                >
                  <span className="link-text">{t("header.contact")}</span>
                  <div className="link-underline"></div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Side Actions */}
          <div className="nav-actions">
            {/* Language Switcher */}
            <div className="lang-switcher" ref={langRef}>
              <button
                ref={langBtnRef}
                className="lang-btn"
                onClick={handleLangToggle}
                aria-label={t("header.switchLanguage") || "Switch language"}
                aria-expanded={langOpen}
                aria-haspopup="listbox"
              >
                <span className="lang-label" aria-hidden="true">
                  {lang === "en" ? "EN" : "AR"}
                </span>
                <svg
                  className={`lang-chevron ${langOpen ? "open" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {langOpen && (
                <div
                  className={`lang-dropdown ${dir === "rtl" ? "lang-dropdown--rtl" : ""}`}
                  role="listbox"
                  aria-label={
                    t("header.availableLanguages") || "Available languages"
                  }
                >
                  <button
                    className={`lang-option ${lang === "en" ? "active" : ""}`}
                    onClick={() => handleLangSwitch("en")}
                    role="option"
                    aria-selected={lang === "en"}
                  >
                    <span className="lang-flag" aria-hidden="true">
                      🇺🇸
                    </span>
                    <span>English</span>
                    {lang === "en" && (
                      <span className="lang-check" aria-hidden="true">
                        ✓
                      </span>
                    )}
                  </button>
                  <button
                    className={`lang-option ${lang === "ar" ? "active" : ""}`}
                    onClick={() => handleLangSwitch("ar")}
                    role="option"
                    aria-selected={lang === "ar"}
                  >
                    <span className="lang-flag" aria-hidden="true">
                      🇸🇦
                    </span>
                    <span>العربية</span>
                    {lang === "ar" && (
                      <span className="lang-check" aria-hidden="true">
                        ✓
                      </span>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Desktop Contact Button - Hidden on mobile */}
            <Link href="/contact" className="contact-btn desktop-contact-btn">
              <span className="btn-text">{t("header.contact")}</span>
              <div className="btn-hover-effect"></div>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              ref={menuBtnRef}
              onClick={handleMenuToggle}
              className={`menu-btn ${menuOpen ? "open" : ""}`}
              aria-label={
                menuOpen
                  ? t("header.closeMenu") || "Close menu"
                  : t("header.openMenu") || "Open menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <div className="menu-icon" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}