'use client'

import { motion, AnimatePresence } from "framer-motion";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { handleWhatsAppOrder } from "@/constants/Index";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white  shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
              {/* <Heart className="w-6 h-6 text-white" /> */}
              <Image src="/logo.png" alt="Ourstory Logo" width={74} height={29} className="rounded-full flex items-center justify-center" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Ourstory_Inv
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Service', 'Package', 'Testimoni', 'FAQ'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
            <motion.button
              onClick={() => handleWhatsAppOrder()}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-gray-600 hover:text-pink-600" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-2xl z-50 md:hidden"
          >
            {/* Close button */}
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-600 hover:text-pink-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 pt-16">
              <div className="flex items-center space-x-2 mb-6">
                <Image src="/logo.png" alt="Ourstory Logo" width={30} height={30} className="rounded-full flex items-center justify-center" />
                <span className="text-md font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Ourstory_Inv
                </span>
              </div>
              <div className="space-y-6">
                {['Home', 'About', 'Service', 'Package', 'Testimoni', 'FAQ'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={() => handleWhatsAppOrder()}
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all"
                >
                  Order Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar