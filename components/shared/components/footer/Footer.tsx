"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Middle Links Section */}
      <section className="footer-section">
        <div className="container">
          <div className="footer-content">
            {/* Left Column */}
            <div className="footer-left">
              <Link href="/" className="navbar-brand">
                <img
                  src="/assets/images/ai_logo.svg"
                  alt="AI Cloud Logo"
                  width="150"
                />
              </Link>

              {/* KSA Location */}
              <h6 className="fw-bold">KSA Address</h6>
              <p>
                Office No.6 , 6th Floor Al Rossais Commercial Center – Al Olaya.
                Riyadh, 12211
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                920013760
              </p>

              {/* Egypt Location */}
              <h6 className="fw-bold">Egypt Address</h6>
              <p>
                Office No.5 , 13 Ibrahim Nawar, branching off from Ahmed Fakhry,
                Nasr City, Cairo
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                +20 10 24982487
              </p>

              <h6 className="fw-bold">Contact</h6>

              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                info&#64;ai-cloud.sa
              </p>

              {/* Social Media Icons */}
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=61566523726522"
                  className="facebook"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://x.com/AICloudTechAds"
                  className="twitter"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://www.linkedin.com/company/ai-cloud-tech-ads/?viewAsMember=true"
                  className="linkedin"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://www.instagram.com/aicloudtechads/"
                  className="instagram"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.tiktok.com/@aicloudtechads"
                  className="tiktok"
                  aria-label="TikTok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
              </div>
            </div>

            {/* Right Column (Quick Links) */}
            <div className="footer-right">
              <p className="text-uppercase fw-bold">
                <Link href="/" className="text-decoration-none">
                  Home
                </Link>
              </p>
              <p className="text-uppercase fw-bold">
                <Link href="/services" className="text-decoration-none">
                  Services
                </Link>
              </p>
              <p className="text-uppercase fw-bold">
                <Link href="/partners" className="text-decoration-none">
                  Partners
                </Link>
              </p>
              <p className="text-uppercase fw-bold">
                <Link href="/about" className="text-decoration-none">
                  About
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar Section */}
      <section className="footer-bottom">
        <div className="footer-copyright">
          <span>
            © {new Date().getFullYear()} AI Cloud. All rights reserved.
          </span>
        </div>

        <div className="footer-links">
          <Link href="#" className="text-decoration-none">
            Privacy
          </Link>
          <Link href="#" className="text-decoration-none">
            Terms
          </Link>
          <Link href="#" className="text-decoration-none">
            Cookies
          </Link>
        </div>
      </section>
    </footer>
  );
}
