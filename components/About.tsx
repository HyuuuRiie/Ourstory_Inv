'use client'

import { motion } from "framer-motion";
import { Heart, Users, Check } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Tentang <span className="text-pink-600">Ourstory_Inv</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kami adalah penyedia jasa undangan pernikahan digital terdepan yang menghadirkan solusi modern
            untuk momen spesial Anda. Dengan fokus pada kemudahan, fleksibilitas, dan desain yang memukau,
            kami membantu Anda menciptakan undangan yang tidak hanya indah dipandang, tetapi juga mudah
            dibagikan kepada keluarga dan teman-teman tersayang.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart className="w-8 h-8" />,
              title: 'Desain Elegan',
              desc: 'Berbagai pilihan tema cantik dan modern sesuai dengan style pernikahan Anda'
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: 'Mudah Dibagikan',
              desc: 'Bagikan undangan melalui WhatsApp, sosial media, atau link langsung dengan mudah'
            },
            {
              icon: <Check className="w-8 h-8" />,
              title: 'Fitur Lengkap',
              desc: 'RSVP online, galeri foto, musik latar, maps, dan berbagai fitur menarik lainnya'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 hover:shadow-lg transition-all"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About