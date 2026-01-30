import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Truck, Clock, CheckCircle } from "lucide-react";

const ServiceRoutes = () => {
  const routes = [
    {
      city: "Ghaziabad NCR",
      state: "Uttar Pradesh / Delhi NCR",
      description: "Major hub for North India distribution. Gateway to Delhi NCR industrial belt.",
      highlight: true,
    },
    {
      city: "Agra",
      state: "Uttar Pradesh",
      description: "Our headquarters. Strategic location connecting North India to central routes.",
      highlight: true,
    },
    {
      city: "Nagpur",
      state: "Maharashtra",
      description: "Central India hub. Zero-mile center connecting East-West and North-South corridors.",
      highlight: false,
    },
    {
      city: "Hyderabad",
      state: "Telangana",
      description: "South-Central hub. Major manufacturing and IT corridor connection point.",
      highlight: false,
    },
    {
      city: "Bengaluru",
      state: "Karnataka",
      description: "Southern industrial hub. Serving automotive and electronics manufacturing clusters.",
      highlight: false,
    },
    {
      city: "Chennai",
      state: "Tamil Nadu",
      description: "Southern gateway. Port connectivity and automotive corridor terminus.",
      highlight: true,
    },
  ];

  const corridorInfo = [
    {
      name: "North-Central Corridor",
      cities: "Ghaziabad → Agra → Nagpur",
      features: ["Industrial raw materials", "Manufacturing goods", "Consumer products"],
    },
    {
      name: "Central-South Corridor",
      cities: "Nagpur → Hyderabad → Bengaluru → Chennai",
      features: ["Automotive parts", "Electronics", "FMCG distribution"],
    },
    {
      name: "Direct North-South",
      cities: "Ghaziabad NCR → Chennai",
      features: ["Long-haul express", "Full truck loads", "Time-critical cargo"],
    },
  ];

  return (
    <div data-testid="routes-page">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20" data-testid="routes-hero">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 
              className="text-5xl sm:text-6xl font-bold text-white uppercase tracking-tight mb-6"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Service <span className="text-orange-500">Routes</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Strategic presence on India's major North-South industrial corridors. 
              Connecting manufacturing hubs from NCR to Chennai.
            </p>
          </div>
        </div>
      </section>

      {/* Route Map Section */}
      <section className="py-20 bg-white" data-testid="route-map">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Route Visualization */}
            <div className="lg:col-span-2">
              <div className="sticky top-32">
                <h2 
                  className="text-2xl font-bold text-slate-900 uppercase tracking-tight mb-8"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  Route Network
                </h2>
                <div className="bg-slate-50 border border-slate-200 p-8">
                  {/* SVG Route Map */}
                  <svg viewBox="0 0 200 400" className="w-full h-auto">
                    {/* Background */}
                    <rect x="0" y="0" width="200" height="400" fill="#f8fafc" />
                    
                    {/* Route Line */}
                    <path 
                      d="M100,40 L100,80 L90,120 L100,180 L110,240 L100,300 L100,360" 
                      fill="none" 
                      stroke="#f97316" 
                      strokeWidth="3"
                      strokeDasharray="8,4"
                    />
                    
                    {/* City Nodes */}
                    {[
                      { x: 100, y: 40, name: "Ghaziabad NCR" },
                      { x: 100, y: 80, name: "Agra" },
                      { x: 90, y: 140, name: "Nagpur" },
                      { x: 110, y: 220, name: "Hyderabad" },
                      { x: 100, y: 300, name: "Bengaluru" },
                      { x: 100, y: 360, name: "Chennai" },
                    ].map((city, index) => (
                      <g key={city.name}>
                        {/* Outer ring */}
                        <circle cx={city.x} cy={city.y} r="12" fill="#f97316" fillOpacity="0.2" />
                        {/* Inner dot */}
                        <circle cx={city.x} cy={city.y} r="6" fill="#f97316" />
                        {/* City label */}
                        <text 
                          x={city.x + 20} 
                          y={city.y + 4} 
                          fill="#0f172a" 
                          fontSize="10" 
                          fontFamily="Inter, sans-serif"
                          fontWeight="500"
                        >
                          {city.name}
                        </text>
                      </g>
                    ))}
                    
                    {/* Direction indicators */}
                    <text x="10" y="30" fill="#64748b" fontSize="8" fontFamily="Inter" textAnchor="start">
                      NORTH
                    </text>
                    <text x="10" y="390" fill="#64748b" fontSize="8" fontFamily="Inter" textAnchor="start">
                      SOUTH
                    </text>
                  </svg>
                  
                  <div className="mt-6 text-center">
                    <p className="text-xs text-slate-500 uppercase tracking-wider">
                      Primary Service Corridor
                    </p>
                    <p className="text-sm text-slate-600 mt-2">
                      Pan-India movement available on request
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Route Details */}
            <div className="lg:col-span-3">
              <h2 
                className="text-2xl font-bold text-slate-900 uppercase tracking-tight mb-8"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                Service Locations
              </h2>
              <div className="space-y-6">
                {routes.map((route, index) => (
                  <div 
                    key={route.city}
                    className={`border p-6 transition-all duration-300 hover:shadow-md ${
                      route.highlight 
                        ? 'border-orange-300 bg-orange-50/50' 
                        : 'border-slate-200 bg-white'
                    }`}
                    data-testid={`route-${route.city.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 ${route.highlight ? 'bg-orange-500' : 'bg-slate-900'}`}>
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-grow">
                        <h3 
                          className="text-xl font-bold text-slate-900 uppercase tracking-tight"
                          style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                        >
                          {route.city}
                        </h3>
                        <p className="text-orange-600 text-sm font-medium mb-2">{route.state}</p>
                        <p className="text-slate-600 text-sm">{route.description}</p>
                      </div>
                      {route.highlight && (
                        <span className="bg-orange-500 text-white text-xs px-2 py-1 uppercase tracking-wider">
                          Key Hub
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corridor Information */}
      <section className="py-20 bg-slate-900" data-testid="corridor-info">
        <div className="section-container">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight mb-12 text-center"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            Service <span className="text-orange-500">Corridors</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {corridorInfo.map((corridor, index) => (
              <div 
                key={corridor.name}
                className="bg-slate-800 border border-slate-700 p-8"
                data-testid={`corridor-${index}`}
              >
                <h3 
                  className="text-xl font-bold text-white uppercase tracking-tight mb-4"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  {corridor.name}
                </h3>
                <div className="flex items-center gap-2 text-orange-500 text-sm mb-4">
                  <Truck className="w-4 h-4" />
                  <span>{corridor.cities}</span>
                </div>
                <ul className="space-y-2">
                  {corridor.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-400 text-sm">
                      <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white" data-testid="service-features">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-slate-200">
              <Truck className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 
                className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-2"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                60+ Trucks
              </h3>
              <p className="text-slate-600 text-sm">
                Combined fleet strength of own and associate trucks
              </p>
            </div>
            <div className="text-center p-8 border border-slate-200">
              <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 
                className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-2"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                On-Time Delivery
              </h3>
              <p className="text-slate-600 text-sm">
                Committed to timely deliveries across all routes
              </p>
            </div>
            <div className="text-center p-8 border border-slate-200">
              <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 
                className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-2"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                Pan-India Reach
              </h3>
              <p className="text-slate-600 text-sm">
                Additional routes available on request
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-500" data-testid="routes-cta">
        <div className="section-container text-center">
          <h2 
            className="text-3xl font-bold text-white uppercase tracking-tight mb-6"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            Need Service on a Different Route?
          </h2>
          <p className="text-orange-100 mb-8">
            Contact us to discuss your specific route requirements.
          </p>
          <Link to="/contact">
            <Button 
              className="bg-slate-900 hover:bg-slate-800 text-white uppercase tracking-wide font-semibold text-sm px-8"
              data-testid="routes-contact-btn"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceRoutes;
