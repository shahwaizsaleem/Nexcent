import { useState, useEffect } from "react";

const LINKS = [
  { name: "Home", href: "#home" },
  { name: "Service", href: "#services" },
  { name: "Feature", href: "#feature" },
  { name: "Product", href: "#product" },
  { name: "Testimonial", href: "#testimonial" },
  { name: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navStyle = {
    backgroundColor: "white",
    borderBottom: "1px solid #e5e7eb",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
    position: "sticky",
    top: 0,
    zIndex: 50,
  };

  const containerStyle = {
    maxWidth: "80rem",
    margin: "0 auto",
    padding: isMobile ? "0 0.75rem" : "0 1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: isMobile ? "3.5rem" : "4rem",
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/assets/icon.png" // ✅ Public folder path
            alt="Nexcent Logo"
            style={{
              height: isMobile ? "2rem" : "2.5rem",
              width: isMobile ? "2rem" : "2.5rem",
              marginRight: "0.75rem",
              objectFit: "contain",
              borderRadius: "0.375rem",
            }}
          />
          <a
            href="#home"
            style={{
              fontSize: isMobile ? "1.125rem" : "1.25rem",
              fontWeight: "bold",
              color: "#111827",
              textDecoration: "none",
            }}
          >
            Nexcent
          </a>
        </div>

        {/* Desktop Links */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "2rem" }}>
            {LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: "#4b5563",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}

        {/* Desktop Buttons */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              style={{
                backgroundColor: "#d1d5db",
                color: "#059669",
                padding: "0.5rem 1.25rem",
                borderRadius: "0.375rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                border: "none",
                cursor: "pointer",
              }}
            >
              Login
            </button>
            <button
              style={{
                backgroundColor: "#4CAF4F",
                color: "white",
                padding: "0.5rem 1.25rem",
                borderRadius: "0.375rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                border: "none",
                cursor: "pointer",
              }}
            >
              Signup
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "1.5rem",
            }}
          >
            ☰
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div
          style={{
            backgroundColor: "white",
            borderTop: "1px solid #e5e7eb",
            padding: "1rem 0.75rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  color: "#374151",
                  textDecoration: "none",
                  padding: "0.75rem",
                  borderRadius: "0.375rem",
                  fontWeight: "500",
                }}
              >
                {link.name}
              </a>
            ))}
            <button
              style={{
                backgroundColor: "#d1d5db",
                color: "#059669",
                padding: "0.75rem",
                borderRadius: "0.375rem",
                border: "none",
              }}
            >
              Login
            </button>
            <button
              style={{
                backgroundColor: "#4CAF4F",
                color: "white",
                padding: "0.75rem",
                borderRadius: "0.375rem",
                border: "none",
              }}
            >
              Signup
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
