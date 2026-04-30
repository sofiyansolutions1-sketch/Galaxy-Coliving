import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingActions() {
  const phoneNumber = "+917793939365";
  const whatsappNumber = "917793939365";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={30} fill="currentColor" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-brand-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-brand-700 transition-colors"
        title="Call Admin"
      >
        <Phone size={28} fill="currentColor" />
      </motion.a>
    </div>
  );
}
