import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    class: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const emailJsConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    ownerEmail: import.meta.env.VITE_OWNER_EMAIL || "perfectcoachings0@gmail.com",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      setSubmitError("Email service is not configured. Please contact the site owner.");
      return;
    }

    setIsSubmitting(true);

    try {
      const submittedAt = new Date().toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      });

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: emailJsConfig.serviceId,
          template_id: emailJsConfig.templateId,
          user_id: emailJsConfig.publicKey,
          template_params: {
            student_name: formData.name,
            phone_number: formData.phone,
            class_name: formData.class,
            subject_interest: formData.subject || "Not specified",
            message: formData.message || "No additional message",
            owner_email: emailJsConfig.ownerEmail,
            submitted_at: submittedAt,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send inquiry email");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        class: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("EmailJS submit failed", error);
      setSubmitError("Failed to submit enquiry. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "79878-95503",
      link: "tel:7987895503",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "79878-95503",
      link: "https://wa.me/917987895503",
    },
    {
      icon: Mail,
      title: "Email",
      content: "perfectcoachings0@gmail.com",
      link: "mailto:perfectcoachings0@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Near Main Market, Madhya Pradesh, India",
      link: "https://share.google/wWs9dAG9ijMzuYVqX",
    },
  ];

  const coachingClassPhotos = [
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      alt: "Teacher explaining concepts in a coaching classroom",
    },
    {
      src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1080&q=80",
      alt: "Students studying and taking notes",
    },
    {
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1080&q=80",
      alt: "Coaching students learning together",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Get in <span className="text-sky-900">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our courses? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-black mb-6">Enquiry Form</h2>
                
                {submitted ? (
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
                    <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      Your enquiry has been submitted successfully. We'll contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Student Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-slate-500 focus:outline-none transition-colors"
                        placeholder="Enter student name"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-slate-500 focus:outline-none transition-colors"
                        placeholder="10-digit mobile number"
                      />
                    </div>

                    {/* Class */}
                    <div>
                      <label htmlFor="class" className="block text-sm font-semibold text-gray-700 mb-2">
                        Class *
                      </label>
                      <select
                        id="class"
                        name="class"
                        required
                        value={formData.class}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-slate-500 focus:outline-none transition-colors"
                      >
                        <option value="">Select Class</option>
                        <option value="11th">Class 11th</option>
                        <option value="12th">Class 12th</option>
                        <option value="bcom">B.Com</option>
                        <option value="bba">BBA</option>
                        <option value="mba">MBA</option>
                      </select>
                    </div>

                    {/* Subject Interest */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject of Interest
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-slate-500 focus:outline-none transition-colors"
                      >
                        <option value="">Select Subject (Optional)</option>
                        <option value="accounts">Accountancy</option>
                        <option value="business">Business Studies</option>
                        <option value="economics">Economics</option>
                        <option value="maths">Applied Mathematics</option>
                        <option value="ip">Information Practices</option>
                        <option value="all">All Subjects</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Additional Message (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-slate-500 focus:outline-none transition-colors resize-none"
                        placeholder="Any specific queries or requirements..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-sky-900 hover:bg-sky-950 disabled:bg-sky-700 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Sending..." : "Submit Inquiry"} <Send size={20} />
                    </button>

                    {submitError && (
                      <p className="text-sm text-red-600 text-center">{submitError}</p>
                    )}

                    <p className="text-sm text-gray-500 text-center">
                      We typically respond within 24 hours
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information & Image */}
            <div className="space-y-8">
              {/* Coaching Class Photos */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src={coachingClassPhotos[0].src}
                    alt={coachingClassPhotos[0].alt}
                    className="w-full h-[220px] object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src={coachingClassPhotos[1].src}
                    alt={coachingClassPhotos[1].alt}
                    className="w-full h-[160px] object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src={coachingClassPhotos[2].src}
                    alt={coachingClassPhotos[2].alt}
                    className="w-full h-[160px] object-cover"
                  />
                </div>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black mb-4">Contact Information</h3>
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-slate-500 transition-all hover:shadow-lg group"
                  >
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sky-900 transition-colors">
                      <info.icon size={24} className="text-sky-900 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black mb-1">{info.title}</h4>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Contact Buttons */}
              <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-sky-100 rounded-2xl p-6">
                <h3 className="font-bold text-black mb-4 text-center">Quick Contact</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:7987895503"
                    className="flex-1 bg-sky-900 hover:bg-sky-950 text-white py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Phone size={20} /> Call Now
                  </a>
                  <a
                    href="https://wa.me/917987895503"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-8">Visit Our Institute</h2>
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center">
            <MapPin size={64} className="text-sky-900 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-black mb-2">Perfect Coaching Classes</h3>
            <p className="text-gray-600 mb-4">Near Main Market, Madhya Pradesh, India</p>
            <p className="text-sm text-gray-500 mb-6">
              Visit us during office hours: Mon-Sat, 9:00 AM - 7:00 PM
            </p>
            <a 
              href="https://share.google/wWs9dAG9ijMzuYVqX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sky-900 hover:bg-sky-950 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            >
              <MapPin size={20} />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
