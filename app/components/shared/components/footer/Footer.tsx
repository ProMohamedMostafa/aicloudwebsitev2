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
import { useI18n } from "@/app/i18n/context";

export default function Footer() {
  const { t } = useI18n();

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

              <h6 className="fw-bold">{t("footer.address")}</h6>
              <p>
                {t("footer.addressText")}
              </p>

              <h6 className="fw-bold">{t("footer.contactLabel")}</h6>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                +20 10 24982487
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                info&#64;ai-cloud.sa
              </p>

              {/* Social Media Icons */}
              <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=61566523726522" className="facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://x.com/AICloudTechAds" className="twitter" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.linkedin.com/company/ai-cloud-tech-ads/?viewAsMember=true" className="linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.instagram.com/aicloudtechads/" className="instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.tiktok.com/@ai.cloud5" className="tiktok" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
              </div>
            </div>

            {/* Right Column (Quick Links) */}
            <div className="footer-right">
              <p className="text-uppercase fw-bold">
                <Link href="/" className="text-decoration-none">{t("footer.home")}</Link>
              </p>
              <p className="text-uppercase fw-bold">
                <Link href="/services" className="text-decoration-none">{t("footer.services")}</Link>
              </p>
              <p className="text-uppercase fw-bold">
                <Link href="/partners" className="text-decoration-none">{t("footer.partners")}</Link>
              </p>
              <p className="text-uppercase fw-bold">
                <Link href="/about" className="text-decoration-none">{t("footer.about")}</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar Section */}
      <section className="footer-bottom">
        <div className="footer-copyright">
          <span>
            © {new Date().getFullYear()} AI Cloud. {t("footer.rights")}
          </span>
        </div>

        <div className="footer-links">
          <Link href="#" className="text-decoration-none">{t("footer.privacy")}</Link>
          <Link href="#" className="text-decoration-none">{t("footer.terms")}</Link>
          <Link href="#" className="text-decoration-none">{t("footer.cookies")}</Link>
        </div>
      </section>
    </footer>
  );
}
