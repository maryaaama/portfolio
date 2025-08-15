"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    thumbnail: "/img/modelmitraportfo.png",
    link: "https://mitra.vercel.app",
    title: "Mitra Model",
  },
  {
    thumbnail: "/img/modelmoj2.png",
    link: "https://moj.vercel.app",
    title: "Moj Model",
  },
  {
    thumbnail: "/img/modelneon.png",
    link: "https://neon.vercel.app",
    title: "Neon Model",
  },
];

export default function ProjectGallery() {
  return (
    <section className="py-16 px-4 flex flex-col items-center lg:w-2/3 w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white font-hero">
       Project Designs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
          >
            {/* تصویر */}
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* لایه هاور */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                View Project
              </span>
            </div>

            {/* عنوان */}
            <p className="mt-2 text-center font-medium text-gray-700 dark:text-gray-200">
              {item.title}
            </p>
          </motion.a>
        ))}
      </div>

      {/* دکمه More (فعلاً hidden) */}
      <button className="mt-8 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition hidden">
        More
      </button>
    </section>
  );
}
