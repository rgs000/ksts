import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ArrowRight, Building, Users, Handshake } from "lucide-react";

const AssociateNetwork = () => {
  const associates = [
    {
      name: "Agra Hyderabad Roadways",
      type: "Transport Contractor & Commission Agents",
      address: "Shop No. 6, Bhagwat Market, G.T. Road, Badalpur, Gautambudh Nagar, Greater Noida, Uttar Pradesh – 203207",
      phones: ["+91 9636117615", "+91 7893107615"],
      email: "agrahyderabadroadways@gmail.com",
      region: "NCR / North Region",
    },
    {
      name: "New Ghaziabad Agra Transport",
      type: "Transport Contractor & Commission Agents",
      address: "Opp. Tata Motors, Near Orbit Indian Oil Petroleum, NH-7, Sy No. 161/C, Village Yellampet, Medchal, Hyderabad, Telangana – 501401",
      phones: ["+91 7702128026", "+91 7285936921"],
      email: "ngatc2017@gmail.com",
      region: "Hyderabad / South Region",
    },
  ];

  const networkFeatures = [
    {
      icon: Users,
      title: "50+ Associate Trucks",
      description: "Extended fleet capacity through trusted associate partners across India.",
    },
    {
      icon: Handshake,
      title: "Vetted Partners",
      description: "All associate brokers are verified for reliability and service quality.",
    },
    {
      icon: Building,
      title: "Regional Coverage",
      description: "Strategic presence in key industrial zones for seamless connectivity.",
    },
  ];

  return (
    <div data-testid="network-page">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20" data-testid="network-hero">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 
              className="text-5xl sm:text-6xl font-bold text-white uppercase tracking-tight mb-6"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Associate <span className="text-orange-500">Network</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Our network of associate brokers and branch offices extends our reach 
              across India's major transportation corridors.
            </p>
          </div>
        </div>
      </section>

      {/* Network Overview */}
      <section className="py-16 bg-white border-b border-slate-200" data-testid="network-overview">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            {networkFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center p-6"
                data-testid={`network-feature-${index}`}
              >
                <div className="bg-slate-900 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 
                  className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-3"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Associate Brokers */}
      <section className="py-20 bg-slate-50" data-testid="associate-brokers">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl sm:text-4xl font-bold text-slate-900 uppercase tracking-tight mb-4"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Associate Brokers / Branches
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Connect with our associate partners for regional transportation needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {associates.map((associate, index) => (
              <div 
                key={associate.name}
                className="bg-white border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                data-testid={`associate-${index}`}
              >
                {/* Header */}
                <div className="bg-slate-900 px-8 py-6">
                  <span className="text-orange-500 text-xs font-semibold uppercase tracking-wider">
                    {associate.region}
                  </span>
                  <h3 
                    className="text-2xl font-bold text-white uppercase tracking-tight mt-2"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    {associate.name}
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">{associate.type}</p>
                </div>

                {/* Details */}
                <div className="p-8 space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-100 p-2 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Address</div>
                      <p className="text-slate-700 text-sm leading-relaxed">{associate.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-100 p-2 flex-shrink-0">
                      <Phone className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Mobile</div>
                      <div className="space-y-1">
                        {associate.phones.map((phone) => (
                          <a 
                            key={phone}
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            className="block text-slate-700 text-sm hover:text-orange-500 transition-colors"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-100 p-2 flex-shrink-0">
                      <Mail className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Email</div>
                      <a 
                        href={`mailto:${associate.email}`}
                        className="text-slate-700 text-sm hover:text-orange-500 transition-colors"
                      >
                        {associate.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-8 py-4 bg-slate-50 border-t border-slate-200">
                  <a 
                    href={`tel:${associate.phones[0].replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 text-orange-500 text-sm font-semibold uppercase tracking-wide hover:text-orange-600 transition-colors"
                  >
                    Contact Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Head Office Reference */}
      <section className="py-16 bg-white" data-testid="head-office">
        <div className="section-container">
          <div className="bg-slate-900 p-10 text-center">
            <h3 
              className="text-2xl font-bold text-white uppercase tracking-tight mb-4"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Head Office
            </h3>
            <p className="text-orange-500 font-semibold mb-4">Karan Singh Transport Services</p>
            <p className="text-slate-400 text-sm max-w-xl mx-auto mb-6">
              167, Nagla Tank (Mewali Khurd), Post – Dauki, Subdistrict – Fatehabad,<br />
              Agra, Uttar Pradesh, India – 283111
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="tel:+918440004260" className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 8440004260</span>
              </a>
              <a href="tel:+918433062315" className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 8433062315</span>
              </a>
              <a href="mailto:contact@karansinghtransport.com" className="flex items-center gap-2 text-white hover:text-orange-500 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@karansinghtransport.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-500" data-testid="network-cta">
        <div className="section-container text-center">
          <h2 
            className="text-3xl font-bold text-white uppercase tracking-tight mb-6"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            Want to Join Our Network?
          </h2>
          <p className="text-orange-100 mb-8 max-w-xl mx-auto">
            If you're a transport operator looking to partner with us, get in touch to discuss collaboration opportunities.
          </p>
          <Link to="/contact">
            <Button 
              className="bg-slate-900 hover:bg-slate-800 text-white uppercase tracking-wide font-semibold text-sm px-8"
              data-testid="network-contact-btn"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AssociateNetwork;
