'use client'

import { heroImages, handleWhatsAppOrder } from "@/constants/Index";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImages[currentSlide]})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Buat Momen Spesialmu Lebih Berkesan dengan{' '}
            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Undangan Digital
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Undangan pernikahan digital yang elegan, modern, dan mudah dibagikan
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <motion.button
              onClick={() => handleWhatsAppOrder()}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="inline w-5 h-5 mr-2" />
              Order Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero