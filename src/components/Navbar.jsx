import { useState, useEffect } from "react";
// import Icon from "../assets/Icon.png";

const LINKS = [
  { name: "Home", href: "#home" },
  { name: "Service", href: "#services" },
  { name: "Feature", href: "#Feature" },
  { name: "Product", href: "#Product" },
  { name: "Testimonial", href: "#Testimonial" },
  { name: "FAQ", href: "#FAQ" },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleLinkClick = (name) => {
    setActive(name);
    setIsMenuOpen(false); // Close mobile menu when link is clicked
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={{
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        paddingLeft: isMobile ? '0.75rem' : '1rem',
        paddingRight: isMobile ? '0.75rem' : '1rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: isMobile ? '3.5rem' : '4rem'
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <img 
              src={Icon}
              alt="Nexcent Logo" 
              style={{
                height: isMobile ? '2rem' : '2.5rem',
                width: isMobile ? '2rem' : '2.5rem',
                marginRight: '0.75rem',
                objectFit: 'contain',
                borderRadius: '0.375rem'
              }} 
            />
            <a 
            href="#home"
            style={{
              fontSize: isMobile ? '1.125rem' : '1.25rem',
              fontWeight: 'bold',
              color: '#111827'
            }}>
              Nexcent
            </a>
          </div>

          {/* Desktop Navigation Links */}
          {!isMobile && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem'
            }}>
              {LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  onMouseLeave={(e) => {
                    if (active !== link.name) {
                      e.target.style.color = '#4b5563';
                    }
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}

          {/* Desktop Login & Signup Buttons */}
          {!isMobile && (
            <div style={{
              display: 'flex',
              gap: '0.5rem'
            }}>
              <button 
                style={{
                  backgroundColor: '#d1d5db',
                  color: '#059669',
                  paddingLeft: '1.25rem',
                  paddingRight: '1.25rem',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  transition: 'background-color 0.2s',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#9ca3af'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#d1d5db'}
              >
                Login
              </button>
              <button 
                style={{
                  backgroundColor: '#4CAF4F',
                  color: 'white',
                  paddingLeft: '1.25rem',
                  paddingRight: '1.25rem',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  transition: 'background-color 0.2s',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#059669'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#10b981'}
              >
                Signup
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={toggleMobileMenu}
              style={{
                padding: '0.5rem',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#4b5563'
              }}
            >
              <div style={{
                width: '1.5rem',
                height: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'currentColor',
                  marginBottom: '3px',
                  transform: isMenuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
                  transition: 'transform 0.2s'
                }}></div>
                <div style={{
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'currentColor',
                  marginBottom: '3px',
                  opacity: isMenuOpen ? 0 : 1,
                  transition: 'opacity 0.2s'
                }}></div>
                <div style={{
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'currentColor',
                  transform: isMenuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
                  transition: 'transform 0.2s'
                }}></div>
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div style={{
          backgroundColor: 'white',
          borderTop: '1px solid #e5e7eb',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          paddingLeft: '0.75rem',
          paddingRight: '0.75rem'
        }}>
          {/* Mobile Navigation Links */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            marginBottom: '1rem'
          }}>
            {LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                style={{
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '500',
                  padding: '0.75rem',
                  borderRadius: '0.375rem',
                  transition: 'all 0.2s',
                  ...(active === link.name
                    ? {
                        color: '#2563eb',
                        backgroundColor: '#eff6ff'
                      }
                    : {
                        color: '#374151'
                      })
                }}
                onTouchStart={(e) => {
                  if (active !== link.name) {
                    e.target.style.backgroundColor = '#f3f4f6';
                  }
                }}
                onTouchEnd={(e) => {
                  if (active !== link.name) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            <button 
              style={{
                backgroundColor: '#4CAF4F',
                color: '#059669',
                padding: '0.875rem',
                borderRadius: '0.375rem',
                fontSize: '1rem',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onTouchStart={(e) => e.target.style.backgroundColor = '#9ca3af'}
              onTouchEnd={(e) => e.target.style.backgroundColor = '#d1d5db'}
            >
              Login
            </button>
            <button 
              style={{
                backgroundColor: '#4CAF4F',
                color: 'white',
                padding: '0.875rem',
                borderRadius: '0.375rem',
                fontSize: '1rem',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onTouchStart={(e) => e.target.style.backgroundColor = '#059669'}
              onTouchEnd={(e) => e.target.style.backgroundColor = '#10b981'}
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