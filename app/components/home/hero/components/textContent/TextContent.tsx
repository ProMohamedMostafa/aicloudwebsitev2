// TextContent.tsx — CSS animation instead of imperative JS setTimeout
import ContactUsButton from "@/app/components/shared/components/ContactUsButton/ContactUsButton";

export default function TextContent() {
  return (
    <div className="text-content">
      <h1 className="title hero-fade-in" style={{ "--delay": "0ms" } as React.CSSProperties}>
        Advanced Solutions to manage{" "}
        <span className="gradient-text">your business</span>
      </h1>

      <p className="subtitle hero-fade-in" style={{ "--delay": "150ms" } as React.CSSProperties}>
        Advanced solutions to manage your business and provide services powered
        by artificial intelligence.
      </p>

      <div className="cta-container hero-fade-in" style={{ "--delay": "300ms" } as React.CSSProperties}>
        <ContactUsButton />
      </div>
    </div>
  );
}
