import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { MapPin, Phone, Mail, ExternalLink, Clock, Send, CheckCircle } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service_type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value) => {
    setFormData((prev) => ({ ...prev, service_type: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      setIsSubmitted(true);
      toast.success("Inquiry submitted successfully! We'll contact you soon.");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service_type: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit inquiry. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceTypes = [
    "Full Truck Load (FTL)",
    "Long-Haul Freight",
    "Dedicated Vehicle Placement",
    "Industrial Goods Transport",
    "General Inquiry",
    "Partnership Inquiry",
  ];

  return (
    <div data-testid="contact-page">
      {/* Hero Section */}
      <section className="bg-slate-900 py-20" data-testid="contact-hero">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 
              className="text-5xl sm:text-6xl font-bold text-white uppercase tracking-tight mb-6"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              Contact <span className="text-orange-500">Us</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Get in touch for freight transportation inquiries, quotes, or partnership opportunities. 
              We're here to help with your logistics needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white" data-testid="contact-main">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 
                className="text-2xl font-bold text-slate-900 uppercase tracking-tight mb-8"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                Send Us a Message
              </h2>

              {isSubmitted ? (
                <div 
                  className="bg-green-50 border border-green-200 p-8 text-center"
                  data-testid="success-message"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 
                    className="text-2xl font-bold text-slate-900 uppercase tracking-tight mb-2"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    Thank You!
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Your inquiry has been submitted successfully. Our team will get back to you within 24 hours.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-slate-900 hover:bg-slate-800 text-white uppercase tracking-wide font-semibold text-sm"
                    data-testid="send-another-btn"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-slate-700 uppercase tracking-wider">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="input-industrial"
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium text-slate-700 uppercase tracking-wider">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="input-industrial"
                        data-testid="input-company"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-slate-700 uppercase tracking-wider">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                        className="input-industrial"
                        data-testid="input-email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-slate-700 uppercase tracking-wider">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="input-industrial"
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service_type" className="text-sm font-medium text-slate-700 uppercase tracking-wider">
                      Service Type *
                    </Label>
                    <Select onValueChange={handleServiceChange} value={formData.service_type} required>
                      <SelectTrigger 
                        className="input-industrial"
                        data-testid="select-service-type"
                      >
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-slate-700 uppercase tracking-wider">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Please describe your transportation needs, including origin, destination, cargo type, and frequency..."
                      className="input-industrial min-h-[150px]"
                      data-testid="input-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white uppercase tracking-wide font-semibold text-sm py-6 h-auto"
                    data-testid="submit-btn"
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Inquiry
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 
                className="text-2xl font-bold text-slate-900 uppercase tracking-tight mb-8"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                Get in Touch
              </h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4" data-testid="contact-phone">
                  <div className="bg-slate-900 p-3">
                    <Phone className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Phone</div>
                    <a 
                      href="tel:+918440004260" 
                      className="block text-slate-900 font-medium hover:text-orange-500 transition-colors"
                    >
                      +91 8440004260
                    </a>
                    <a 
                      href="tel:+918433062315" 
                      className="block text-slate-900 font-medium hover:text-orange-500 transition-colors"
                    >
                      +91 8433062315
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4" data-testid="contact-email">
                  <div className="bg-slate-900 p-3">
                    <Mail className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Email</div>
                    <a 
                      href="mailto:contact@karansinghtransport.com" 
                      className="text-slate-900 font-medium hover:text-orange-500 transition-colors"
                    >
                      contact@karansinghtransport.com
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4" data-testid="contact-website">
                  <div className="bg-slate-900 p-3">
                    <ExternalLink className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Website</div>
                    <a 
                      href="https://www.karansinghtransport.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 font-medium hover:text-orange-500 transition-colors"
                    >
                      www.karansinghtransport.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4" data-testid="contact-address">
                  <div className="bg-slate-900 p-3">
                    <MapPin className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Registered Address</div>
                    <p className="text-slate-900 font-medium leading-relaxed">
                      167, Nagla Tank (Mewali Khurd),<br />
                      Post – Dauki, Subdistrict – Fatehabad,<br />
                      Agra, Uttar Pradesh, India – 283111
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4" data-testid="contact-hours">
                  <div className="bg-slate-900 p-3">
                    <Clock className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Business Hours</div>
                    <p className="text-slate-900 font-medium">
                      Monday – Saturday: 9:00 AM – 7:00 PM<br />
                      Sunday: Closed
                    </p>
                    <p className="text-slate-500 text-sm mt-2">
                      For urgent matters, call anytime.
                    </p>
                  </div>
                </div>
              </div>

              {/* GSTIN */}
              <div className="mt-10 pt-8 border-t border-slate-200">
                <div className="bg-slate-50 border border-slate-200 p-6">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Business Registration</div>
                  <p className="text-slate-900 font-medium">
                    Legal Name: Karan Singh Transport Services
                  </p>
                  <p className="text-slate-700 text-sm mt-1">
                    GSTIN: <span className="font-mono">09FPTPS9131F1Z4</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
