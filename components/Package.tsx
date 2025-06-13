'use client'

import { motion } from "framer-motion";
import { Star, Check } from "lucide-react";
import { packages, handleWhatsAppOrder } from "@/constants/Index";

const Package = () => {
  return (
    <section id="package" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Pilihan <span className="text-pink-600">Paket</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan undangan pernikahan Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all ${pkg.popular
                ? 'bg-gradient-to-br from-pink-500 to-rose-500 text-white transform scale-105'
                : 'bg-white border-2 border-gray-100'
                }`}
              whileHover={{ y: -10 }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-800 px-6 py-2 rounded-full text-sm font-bold">
                  <Star className="inline w-4 h-4 mr-1" />
                  TERPOPULER
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-4 ${pkg.popular ? 'text-white' : 'text-gray-800'}`}>
                  {pkg.name}
                </h3>
                <div className={`text-3xl font-bold ${pkg.popular ? 'text-white' : 'text-pink-600'}`}>
                  {pkg.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`w-5 h-5 mr-3 ${pkg.popular ? 'text-white' : 'text-green-500'}`} />
                    <span className={pkg.popular ? 'text-white' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* <motion.button
                onClick={() => handleWhatsAppOrder()}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${pkg.popular
                  ? 'bg-white text-pink-600 hover:shadow-lg'
                  : 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-lg'
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Pilih Paket Ini
              </motion.button> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Package