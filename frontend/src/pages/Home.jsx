import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Truck, Package, MapPin, Users, Clock, Shield, ArrowRight, CheckCircle } from "lucide-react";

const Home = () => {
  const stats = [
    { number: "10", label: "Own Trucks", icon: Truck },
    { number: "50+", label: "Associate Fleet", icon: Users },
    { number: "6+", label: "Major Routes", icon: MapPin },
    { number: "24/7", label: "Support", icon: Clock },
  ];

  const services = [
    {
      title: "Full Truck Load (FTL)",
      description: "Dedicated trucks for your cargo with direct delivery across India.",
      icon: Truck,
    },
    {
      title: "Long-Haul Freight",
      description: "Inter-state freight movement on major industrial corridors.",
      icon: Package,
    },
    {
      title: "Dedicated Placement",
      description: "Dedicated vehicle placement for regular transportation needs.",
      icon: MapPin,
    },
    {
      title: "GST-Compliant Billing",
      description: "Complete documentation and timely POD submission.",
      icon: Shield,
    },
  ];

  const routes = [
    "Ghaziabad NCR",
    "Agra",
    "Nagpur",
    "Hyderabad",
    "Bengaluru",
    "Chennai",
  ];

  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1624695/pexels-photo-1624695.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        data-testid="hero-section"
      >
        <div className="absolute inset-0 bg-slate-900/85"></div>
        <div className="relative section-container py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 px-4 py-2 mb-8 animate-fade-in-up">
              <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
                Pan-India Logistics Partner
              </span>
            </div>
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight mb-6 animate-fade-in-up animate-delay-100"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Karan Singh<br />
              <span className="text-orange-500">Transport Services</span>
            </h1>
            <p className="text-2xl text-slate-300 uppercase tracking-widest mb-8 animate-fade-in-up animate-delay-200" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              Safe • Fast • Reliable Services
            </p>
            <p className="text-slate-400 text-lg max-w-xl mb-10 animate-fade-in-up animate-delay-300">
              Your trusted partner for B2B freight transportation across India. 
              With 60+ trucks and strategic presence on major industrial corridors.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-400">
              <Link to="/contact">
                <Button 
                  className="bg-orange-500 hover:bg-orange-600 text-white uppercase tracking-wide font-semibold text-sm px-8 py-6 h-auto"
                  data-testid="hero-contact-btn"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 uppercase tracking-wide font-semibold text-sm px-8 py-6 h-auto"
                  data-testid="hero-services-btn"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-slate-200" data-testid="stats-section">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="stat-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, '-')}`}
              >
                <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-50" data-testid="services-preview">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl sm:text-5xl font-bold text-slate-900 uppercase tracking-tight mb-4"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Our Services
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Comprehensive freight solutions tailored for manufacturing and industrial businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className="service-card animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`service-card-${index}`}
              >
                <service.icon className="service-icon w-10 h-10 text-slate-400 mb-6 transition-colors duration-300" />
                <h3 
                  className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-3"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button 
                className="bg-slate-900 hover:bg-slate-800 text-white uppercase tracking-wide font-semibold text-sm px-8"
                data-testid="view-all-services-btn"
              >
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section className="py-20 bg-slate-900" data-testid="routes-preview">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 
                className="text-4xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-6"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                Service <span className="text-orange-500">Routes</span>
              </h2>
              <p className="text-slate-400 mb-8">
                Strategic presence on major North-South industrial corridors. 
                Connecting key manufacturing hubs across India.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {routes.map((route) => (
                  <div 
                    key={route} 
                    className="flex items-center gap-3 text-slate-300"
                    data-testid={`route-${route.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span>{route}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-sm italic mb-8">
                Pan-India movement available on request
              </p>
              <Link to="/routes">
                <Button 
                  className="bg-orange-500 hover:bg-orange-600 text-white uppercase tracking-wide font-semibold text-sm px-8"
                  data-testid="view-routes-btn"
                >
                  View Route Map
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              {/* Simplified Route Visualization */}
              <div className="bg-slate-800 border border-slate-700 p-8 relative">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-6">North-South Corridor</div>
                <div className="space-y-6">
                  {routes.map((route, index) => (
                    <div key={route} className="flex items-center gap-4">
                      <div className="relative">
                        <div className="route-node"></div>
                        {index < routes.length - 1 && (
                          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-orange-500/30"></div>
                        )}
                      </div>
                      <span className="text-white font-medium">{route}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500" data-testid="cta-section">
        <div className="section-container text-center">
          <h2 
            className="text-4xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-6"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            Ready to Move Your Freight?
          </h2>
          <p className="text-orange-100 max-w-2xl mx-auto mb-10">
            Partner with us for reliable, GST-compliant freight transportation. 
            Get in touch today for a quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button 
                className="bg-slate-900 hover:bg-slate-800 text-white uppercase tracking-wide font-semibold text-sm px-8 py-6 h-auto"
                data-testid="cta-contact-btn"
              >
                Contact Us Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="tel:+918440004260">
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-500 uppercase tracking-wide font-semibold text-sm px-8 py-6 h-auto"
                data-testid="cta-call-btn"
              >
                Call: +91 8440004260
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
