import { Phone, ArrowUp } from "lucide-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useState, useEffect } from "react";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "7987895503";
  const whatsappNumber = "917987895503"; // Country code added
  const message = "Hello! I would like to enquire about admissions at Perfect Coaching Classes.";

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#173954] hover:bg-sky-950 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Contact via WhatsApp"
      >
        <WhatsAppIcon sx={{ fontSize: 24 }} />
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-sky-900 hover:bg-sky-950 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="Call us"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
