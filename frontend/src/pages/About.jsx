import { Truck, Target, Eye, Shield, Clock, Users, CheckCircle, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We prioritize the safe handling and delivery of your cargo above all else.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Consistent on-time deliveries to keep your supply chain running smoothly.",
    },
    {
      icon: Users,
      title: "Reliable Partnership",
      description: "Building long-term relationships based on trust and dependability.",
    },
    {
      icon: Award,
      title: "GST Compliant",
      description: "Full documentation and compliant billing for seamless transactions.",
    },
  ];

  const highlights = [
    "10 Own Trucks in Active Fleet",
    "50+ Associate Trucks Network",
    "Pan-India Service Coverage",
    "GST-Compliant Operations",
    "Timely POD Submission",
    "Dedicated Customer Support",
  ];

  return (
    <div data-testid="about-page">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20" data-testid="about-hero">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 
              className="text-5xl sm:text-6xl font-bold text-white uppercase tracking-tight mb-6"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              About <span className="text-orange-500">Us</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Karan Singh Transport Services is a trusted name in B2B freight transportation, 
              serving manufacturing and industrial businesses across India with reliable logistics solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 bg-white" data-testid="company-profile">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 px-4 py-2 mb-8">
                <span className="text-orange-600 text-sm font-semibold uppercase tracking-wider">
                  Our Story
                </span>
              </div>
              <h2 
                className="text-4xl font-bold text-slate-900 uppercase tracking-tight mb-6"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                Your Trusted Logistics Partner
              </h2>
              <p className="text-slate-600 mb-6">
                Based in Agra, Uttar Pradesh, Karan Singh Transport Services has established itself 
                as a dependable freight transportation company. We operate on major industrial corridors 
                connecting North India to the Southern states.
              </p>
              <p className="text-slate-600 mb-8">
                Our operating model combines our own fleet with a strong network of associate trucks, 
                giving us the flexibility to handle varying cargo volumes while maintaining quality standards. 
                From Ghaziabad NCR to Chennai, we ensure your goods reach their destination safely and on time.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((highlight) => (
                  <div 
                    key={highlight} 
                    className="flex items-center gap-3"
                    data-testid={`highlight-${highlight.toLowerCase().replace(/\s/g, '-').slice(0, 20)}`}
                  >
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"
                alt="Truck on Highway"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-orange-500 p-6">
                <div className="text-white">
                  <div 
                    className="text-4xl font-bold"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    60+
                  </div>
                  <div className="text-orange-100 text-sm uppercase tracking-wider">
                    Total Fleet Strength
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50" data-testid="mission-vision">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 p-10">
              <div className="bg-slate-900 w-14 h-14 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-orange-500" />
              </div>
              <h3 
                className="text-2xl font-bold text-slate-900 uppercase tracking-tight mb-4"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                Our Mission
              </h3>
              <p className="text-slate-600">
                To provide safe, fast, and reliable freight transportation services that help 
                businesses optimize their supply chains. We aim to be the preferred logistics 
                partner for manufacturing and industrial companies across India through consistent 
                service quality and professional operations.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-10">
              <div className="bg-orange-500 w-14 h-14 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 
                className="text-2xl font-bold text-slate-900 uppercase tracking-tight mb-4"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                Our Vision
              </h3>
              <p className="text-slate-600">
                To expand our presence across all major industrial corridors in India while 
                maintaining the trust and reliability that defines our service. We envision 
                becoming a leading name in B2B freight transportation with a focus on 
                customer satisfaction and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-900" data-testid="core-values">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl sm:text-5xl font-bold text-white uppercase tracking-tight mb-4"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Our Core <span className="text-orange-500">Values</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              The principles that guide our operations and define our commitment to excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-slate-800 border border-slate-700 p-8 hover:border-orange-500 transition-colors duration-300"
                data-testid={`value-${index}`}
              >
                <value.icon className="w-10 h-10 text-orange-500 mb-6" />
                <h3 
                  className="text-xl font-bold text-white uppercase tracking-tight mb-3"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  {value.title}
                </h3>
                <p className="text-slate-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Details */}
      <section className="py-20 bg-white" data-testid="business-details">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 
              className="text-3xl font-bold text-slate-900 uppercase tracking-tight mb-8 text-center"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Business Information
            </h2>
            <div className="bg-slate-50 border border-slate-200 p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Legal Name</div>
                  <div className="text-slate-900 font-medium">Karan Singh Transport Services</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">GSTIN</div>
                  <div className="text-slate-900 font-medium">09FPTPS9131F1Z4</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Industry</div>
                  <div className="text-slate-900 font-medium">Transportation & Logistics Services</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Business Type</div>
                  <div className="text-slate-900 font-medium">B2B Freight Transportation</div>
                </div>
                <div className="md:col-span-2">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Registered Address</div>
                  <div className="text-slate-900 font-medium">
                    167, Nagla Tank (Mewali Khurd), Post – Dauki, Subdistrict – Fatehabad,<br />
                    Agra, Uttar Pradesh, India – 283111
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
