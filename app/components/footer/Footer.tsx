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
import { useI18n } from "@/app/i18n/context";

export default function Footer() {
  const { t } = useI18n();

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
            <p className="footer-description">{t("footer.description")}</p>

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
              <h3 className="footer-column-title">{t("footer.navigation")}</h3>
              <ul className="footer-list">
                <li><Link href="/" className="footer-link">{t("footer.home")}</Link></li>
                <li><Link href="/services" className="footer-link">{t("footer.services")}</Link></li>
                <li><Link href="/partners" className="footer-link">{t("footer.partners")}</Link></li>
                <li><Link href="/about" className="footer-link">{t("footer.about")}</Link></li>
                <li><Link href="/contact" className="footer-link">{t("footer.contact")}</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">{t("footer.products")}</h3>
              <ul className="footer-list">
                <li><Link href="/products/ai" className="footer-link">{t("footer.aiTools")}</Link></li>
                <li><Link href="/products/cloud" className="footer-link">{t("footer.cloudServices")}</Link></li>
                <li><Link href="/products/analytics" className="footer-link">{t("footer.analytics")}</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">{t("footer.support")}</h3>
              <ul className="footer-list">
                <li><Link href="/help" className="footer-link">{t("footer.helpCenter")}</Link></li>
                <li><Link href="/documentation" className="footer-link">{t("footer.documentation")}</Link></li>
                <li><Link href="/status" className="footer-link">{t("footer.systemStatus")}</Link></li>
                <li><Link href="/support" className="footer-link">{t("footer.technicalSupport")}</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">{t("footer.legal")}</h3>
              <ul className="footer-list">
                <li><Link href="/privacy" className="footer-link">{t("footer.privacyPolicy")}</Link></li>
                <li><Link href="/terms" className="footer-link">{t("footer.termsOfService")}</Link></li>
                <li><Link href="/cookies" className="footer-link">{t("footer.cookiePolicy")}</Link></li>
                <li><Link href="/compliance" className="footer-link">{t("footer.compliance")}</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} AI Cloud. {t("footer.rights")}
          </div>
          <div className="footer-legal">
            <Link href="/privacy" className="footer-legal-link">{t("footer.privacy")}</Link>
            <Link href="/terms" className="footer-legal-link">{t("footer.terms")}</Link>
            <Link href="/sitemap" className="footer-legal-link">{t("footer.sitemap")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
