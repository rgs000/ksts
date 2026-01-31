import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const COMPANY_LOGO = "https://customer-assets.emergentagent.com/job_karan-freight/artifacts/7n62afik_logo.PNG";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white" data-testid="footer">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={COMPANY_LOGO} 
                alt="Karan Singh Transport Services" 
                className="h-20 w-auto object-contain bg-white p-2 rounded"
              />
            </div>
            <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm mb-4">
              Safe • Fast • Reliable Services
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Your trusted partner for pan-India freight transportation. With a fleet of 60+ trucks 
              and a network spanning major industrial corridors, we deliver excellence in logistics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Routes", path: "/routes" },
                { name: "Network", path: "/network" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:+918440004260" className="text-slate-400 hover:text-white transition-colors block">
                    +91 8440004260
                  </a>
                  <a href="tel:+918433062315" className="text-slate-400 hover:text-white transition-colors block">
                    +91 8433062315
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                <a 
                  href="mailto:contact@karansinghtransport.com" 
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  contact@karansinghtransport.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <ExternalLink className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                <a 
                  href="https://www.karansinghtransport.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  www.karansinghtransport.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Registered Address Bar */}
      <div className="border-t border-slate-800">
        <div className="section-container py-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
            <div>
              <span className="text-xs text-slate-500 uppercase tracking-wider block mb-1">Registered Address</span>
              <p className="text-slate-400 text-sm">
                167, Nagla Tank (Mewali Khurd), Post – Dauki, Subdistrict – Fatehabad, Agra, Uttar Pradesh, India – 283111
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Footer */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="section-container py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>
              © {currentYear} Karan Singh Transport Services. All rights reserved.
            </p>
            <p className="text-center md:text-right">
              Legal Name: <span className="text-slate-400">Karan Singh Transport Services</span> | 
              GSTIN: <span className="text-slate-400">09FPTPS9131F1Z4</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
