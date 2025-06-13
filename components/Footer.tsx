'use client'

import { motion } from "motion/react"
import { Heart, Instagram, Facebook, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-11 h-11 bg-transparent rounded-full flex items-center justify-center">
                {/* <Heart className="w-8 h-8 text-white" /> */}
                <Image src="/logo.png" alt="Ourstory Logo" width={74} height={29} className="rounded-full flex items-center justify-center" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Ourstory_Inv
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Menciptakan undangan pernikahan digital yang elegan dan berkesan untuk momen spesial Anda.
              Dengan desain modern dan fitur lengkap, kami siap mewujudkan undangan impian Anda.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.instagram.com/ourstory_inv/profilecard/?igsh=cTdOMTF5cTU1M2x3" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/profile.php?id=61556495163643" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Service', 'Package', 'Testimoni', 'FAQ'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-pink-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">+62 896-2753-9374</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">hello@ourstory.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span className="text-gray-300">Riau, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Ourstory_Inv. All rights reserved. Made with{' '}
            <Heart className="inline w-4 h-4 text-pink-400 mx-1" />
            for your special moments.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer