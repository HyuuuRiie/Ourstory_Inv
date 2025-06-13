'use client'

import { motion } from "framer-motion";
import { Heart, MessageCircle, Check } from "lucide-react";
import { handleWhatsAppOrder } from "@/constants/Index";

const Howto = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Cara <span className="text-pink-600">Pemesanan</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proses pemesanan yang mudah dan cepat, hanya dalam 3 langkah sederhana
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Pilih Tema',
              desc: 'Pilih tema undangan yang sesuai dengan keinginan Kamu',
              icon: <Heart className="w-8 h-8" />
            },
            {
              step: '02',
              title: 'Pesan Undangan',
              desc: 'Setelah memilih tema yang kamu inginkan, klik pesan sekarang',
              icon: <MessageCircle className="w-8 h-8" />
            },
            {
              step: '03',
              title: 'Lakukan Pembayaran',
              desc: 'Setelah pembayaran, kamu akan mendapatkan dashboard yang sudah disediakan',
              icon: <Check className="w-8 h-8" />
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center relative"
              whileHover={{ y: -10 }}
            >
              <div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {item.step}
                </div>

                <div className="mt-6 mb-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>

              {/* Connector line */}
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-pink-300 to-rose-300 z-0"></div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => handleWhatsAppOrder()}
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="inline w-5 h-5 mr-2" />
            Mulai Konsultasi Sekarang
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Howto