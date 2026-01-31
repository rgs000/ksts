import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import CompanyLogo from "@/components/CompanyLogo";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Routes", path: "/routes" },
    { name: "Network", path: "/network" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50" data-testid="header">
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" data-testid="logo-link">
            <CompanyLogo className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-wide transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-orange-500"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                data-testid={`nav-${link.name.toLowerCase().replace(/\s/g, '-')}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+918440004260" 
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
              data-testid="phone-link"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+91 8440004260</span>
            </a>
            <Link to="/contact">
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white uppercase tracking-wide font-semibold text-sm px-6"
                data-testid="header-cta-btn"
              >
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-900" />
            ) : (
              <Menu className="w-6 h-6 text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200" data-testid="mobile-nav">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium uppercase tracking-wide py-2 ${
                    isActive(link.path)
                      ? "text-orange-500"
                      : "text-slate-600"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${link.name.toLowerCase().replace(/\s/g, '-')}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white uppercase tracking-wide font-semibold text-sm mt-2"
                  data-testid="mobile-cta-btn"
                >
                  Get in Touch
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
