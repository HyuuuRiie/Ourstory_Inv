'use client'

import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { testimoniImages } from "@/constants/Index";
import Image from "next/image";

const Testimoni = () => {
  const [currentTestimoni, setCurrentTestimoni] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimoni((prev) => (prev + 1) % testimoniImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimoniImages.length]);


  return (
    <section id="testimoni" className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            <span className="text-pink-600">Testimoni</span> Pelanggan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Apa kata mereka yang telah mempercayakan momen spesial mereka kepada kami
          </p>
        </motion.div>

        <div className="relative max-w-md mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimoni}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl shadow-2xl overflow-hidden"
            >
              <div
                className="h-96 bg-cover bg-center relative"
              // style={{ backgroundImage: `url(${testimoniImages[currentTestimoni]})` }}
              >
                <Image
                  src={testimoniImages[currentTestimoni].image}
                  alt={`Foto testimoni ${currentTestimoni + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-800 text-sm mb-2">
                    "{testimoniImages[currentTestimoni].message}"
                  </p>
                  <p className="text-pink-600 font-semibold text-sm">
                    - {testimoniImages[currentTestimoni].name}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimoni indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimoniImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimoni(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentTestimoni
                  ? 'bg-pink-500'
                  : 'bg-gray-300 hover:bg-pink-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimoni