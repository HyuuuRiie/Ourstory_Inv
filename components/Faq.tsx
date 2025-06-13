'use client'

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/constants/Index";
import { useState } from "react";

const Faq = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            <span className="text-pink-600">FAQ</span> - Pertanyaan Umum
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban atas pertanyaan yang sering ditanyakan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              // initial={{ y: 30, opacity: 0 }}
              // whileInView={{ y: 0, opacity: 1 }}
              // transition={{ duration: 0.6, delay: index * 0.05 }}
              // viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full p-6 text-left hover:bg-gradient-to-r from-pink-300 to-rose-300 transition-colors flex justify-between items-start"
              >
                <h3 className="font-semibold text-gray-800 pr-4">{faq.q}</h3>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-pink-600 flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq