"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo and company info */}
          <div className="footer-section">
            <Link href="/" className="footer-logo">
              <img
                src="/assets/images/ai_logo.svg"
                className="logo"
                alt="AI Cloud Logo"
              />
            </Link>
            <p className="footer-description">
              Leading provider of AI and cloud solutions for modern businesses.
            </p>

            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="footer-links">
            <div className="footer-column">
              <h3 className="footer-column-title">Navigation</h3>
              <ul className="footer-list">
                <li>
                  <Link href="/" className="footer-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="footer-link">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="footer-link">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="footer-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="footer-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">Products</h3>
              <ul className="footer-list">
                <li>
                  <Link href="/products/ai" className="footer-link">
                    AI Tools
                  </Link>
                </li>
                <li>
                  <Link href="/products/cloud" className="footer-link">
                    Cloud Services
                  </Link>
                </li>
                <li>
                  <Link href="/products/analytics" className="footer-link">
                    Analytics
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">Support</h3>
              <ul className="footer-list">
                <li>
                  <Link href="/help" className="footer-link">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/documentation" className="footer-link">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="footer-link">
                    System Status
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="footer-link">
                    Technical Support
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">Legal</h3>
              <ul className="footer-list">
                <li>
                  <Link href="/privacy" className="footer-link">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="footer-link">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="footer-link">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="footer-link">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} AI Cloud. All rights reserved.
          </div>
          <div className="footer-legal">
            <Link href="/privacy" className="footer-legal-link">
              Privacy
            </Link>
            <Link href="/terms" className="footer-legal-link">
              Terms
            </Link>
            <Link href="/sitemap" className="footer-legal-link">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
