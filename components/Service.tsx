'use client'

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ShoppingCart } from "lucide-react";
import { themes, handleWhatsAppOrder, themeCategories, ThemeCategory } from "@/constants/Index";
import { useState } from "react";
import Image from "next/image";

const Service = () => {
  const [activeCategory, setActiveCategory] = useState<ThemeCategory>('floral');
  return (
    <section id="service" className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Pilihan <span className="text-pink-600">Tema</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan tema undangan yang sempurna untuk momen bahagia Anda
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {themeCategories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${activeCategory === category.key
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:shadow-md'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Themes Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
          >
            {themes[activeCategory]?.map((theme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                whileHover={{ y: -10 }}
              >
                <div className="relative h-32 md:h-48 w-full rounded overflow-hidden">
                  <Image
                    src={theme.image}
                    alt={theme.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 100vw, 100vw"
                  />
                  <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-red-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold">
                    -{theme.discount}%
                  </div>
                </div>

                <div className="p-3 md:p-6">
                  <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-2 md:mb-3">{theme.name}</h3>

                  <div className="mb-3 md:mb-4">
                    <div className="flex items-center space-x-1 md:space-x-2 mb-1 md:mb-2">
                      <span className="text-xs md:text-sm text-gray-500 line-through">
                        Rp. {theme.originalPrice.toLocaleString()}
                      </span>
                      <span className="bg-red-100 text-red-600 px-1 md:px-2 py-0.5 md:py-1 rounded text-xs font-bold">
                        {theme.discount}% OFF
                      </span>
                    </div>
                    <div className="text-lg md:text-2xl font-bold text-pink-600">
                      Rp. {theme.finalPrice.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                    <motion.button
                      onClick={() => window.open(theme.src, '_blank')}
                      className="flex-1 bg-gray-100 text-gray-700 py-2 px-2 md:px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium text-xs md:text-base"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="inline w-3 md:w-4 h-3 md:h-4 mr-1" />
                      Demo
                    </motion.button>
                    <motion.button
                      onClick={() => handleWhatsAppOrder(theme.name)}
                      className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 px-2 md:px-4 rounded-lg hover:shadow-lg transition-all font-medium text-xs md:text-base"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ShoppingCart className="inline w-3 md:w-4 h-3 md:h-4 mr-1" />
                      Pesan ini
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Service