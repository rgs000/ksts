import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Truck, Package, MapPin, FileText, Users, Clock, 
  ArrowRight, CheckCircle, Building, Route 
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Truck,
      title: "Full Truck Load (FTL) Transportation",
      description: "Dedicated truck services for your cargo needs. Our FTL service ensures your goods have exclusive use of the vehicle, providing direct point-to-point delivery without intermediate stops.",
      features: [
        "Dedicated vehicle for your cargo",
        "Direct delivery without transshipment",
        "Suitable for high-volume shipments",
        "Flexible scheduling options",
      ],
    },
    {
      icon: Route,
      title: "Long-Haul Inter-State Freight",
      description: "Reliable long-distance freight movement across major industrial corridors. We specialize in North-South routes connecting manufacturing hubs from NCR to Southern India.",
      features: [
        "Pan-India coverage on major routes",
        "Regular service on established corridors",
        "Experienced long-haul drivers",
        "Real-time shipment updates",
      ],
    },
    {
      icon: Building,
      title: "Industrial & Manufacturing Goods Transport",
      description: "Specialized transportation for industrial and manufacturing sector cargo. We understand the unique requirements of moving machinery, raw materials, and finished goods.",
      features: [
        "Handling of heavy industrial cargo",
        "Secure transport of machinery",
        "Raw material movement",
        "Finished goods distribution",
      ],
    },
    {
      icon: MapPin,
      title: "Dedicated Vehicle Placement",
      description: "Long-term vehicle placement solutions for businesses with regular transportation needs. Get dedicated trucks stationed for your operations with flexible contracts.",
      features: [
        "Vehicles dedicated to your business",
        "Flexible contract terms",
        "Priority dispatch availability",
        "Cost-effective for regular routes",
      ],
    },
    {
      icon: Users,
      title: "Associate Fleet Management",
      description: "Access to our extended network of 50+ associate trucks. Our associate fleet expands our capacity to handle peak demands while maintaining service quality.",
      features: [
        "Extended fleet capacity",
        "Vetted associate partners",
        "Consistent service standards",
        "Scalable transportation solutions",
      ],
    },
    {
      icon: FileText,
      title: "GST-Compliant Documentation",
      description: "Complete documentation support with GST-compliant billing. We handle e-way bills, invoices, and ensure timely submission of Proof of Delivery (POD).",
      features: [
        "GST-compliant invoicing",
        "E-way bill generation",
        "Timely POD submission",
        "Complete shipment documentation",
      ],
    },
  ];

  const additionalFeatures = [
    { icon: Clock, text: "24/7 Customer Support" },
    { icon: CheckCircle, text: "Verified Drivers" },
    { icon: Package, text: "Cargo Insurance Available" },
    { icon: FileText, text: "Digital Documentation" },
  ];

  return (
    <div data-testid="services-page">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20" data-testid="services-hero">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 
              className="text-5xl sm:text-6xl font-bold text-white uppercase tracking-tight mb-6"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Our <span className="text-orange-500">Services</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Comprehensive freight transportation solutions designed for manufacturing and 
              industrial businesses. From FTL shipments to dedicated vehicle placement, 
              we cover all your logistics needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-white" data-testid="main-services">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div 
                key={service.title}
                className="bg-white border border-slate-200 p-8 hover:border-slate-400 hover:shadow-lg transition-all duration-300"
                data-testid={`main-service-${index}`}
              >
                <div className="flex items-start gap-6">
                  <div className="bg-slate-900 p-4 flex-shrink-0">
                    <service.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="flex-grow">
                    <h3 
                      className="text-2xl font-bold text-slate-900 uppercase tracking-tight mb-4"
                      style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-slate-50 border-y border-slate-200" data-testid="additional-features">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 justify-center p-4"
                data-testid={`additional-feature-${index}`}
              >
                <feature.icon className="w-6 h-6 text-orange-500" />
                <span className="text-slate-700 font-medium text-sm">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/4487363/pexels-photo-4487363.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        data-testid="service-coverage"
      >
        <div className="absolute inset-0 bg-slate-900/90"></div>
        <div className="relative section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 
              className="text-4xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-6"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Pan-India <span className="text-orange-500">Coverage</span>
            </h2>
            <p className="text-slate-400 mb-10">
              Our primary service corridors span from Ghaziabad NCR to Chennai, 
              covering major industrial hubs. Additional routes available on request.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {["Ghaziabad NCR", "Agra", "Nagpur", "Hyderabad", "Bengaluru", "Chennai"].map((city) => (
                <span 
                  key={city}
                  className="bg-white/10 border border-white/20 px-4 py-2 text-white text-sm"
                >
                  {city}
                </span>
              ))}
            </div>
            <Link to="/routes">
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white uppercase tracking-wide font-semibold text-sm px-8"
                data-testid="view-routes-btn"
              >
                View Complete Route Map
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white" data-testid="services-cta">
        <div className="section-container">
          <div className="bg-slate-900 p-12 text-center">
            <h2 
              className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-tight mb-6"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Need a Transportation Solution?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Contact us to discuss your freight requirements. We offer customized 
              solutions for businesses of all sizes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button 
                  className="bg-orange-500 hover:bg-orange-600 text-white uppercase tracking-wide font-semibold text-sm px-8"
                  data-testid="contact-btn"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="tel:+918440004260">
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 uppercase tracking-wide font-semibold text-sm px-8"
                  data-testid="call-btn"
                >
                  Call: +91 8440004260
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
