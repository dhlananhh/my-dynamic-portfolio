"use client";

import { motion } from "framer-motion";
import React from "react";

const AnimatedBlobBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-[-1] overflow-hidden">
      <div className="relative h-full w-full">
        <motion.div
          animate={ {
            x: [ "0%", "15%", "-10%", "0%" ],
            y: [ "0%", "-20%", "10%", "0%" ],
            rotate: [ 0, 15, 0 ],
            scale: [ 1, 1.1, 1 ]
          } }
          transition={ {
            duration: 25,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          } }
          className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 mix-blend-screen filter blur-3xl opacity-20 sm:h-96 sm:w-96 sm:opacity-25"
        />

        <motion.div
          animate={ {
            x: [ "0%", "-15%", "5%", "0%" ],
            y: [ "0%", "20%", "-15%", "0%" ],
            scale: [ 1, 1.15, 1 ]
          } }
          transition={ {
            duration: 30,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 5,
          } }
          className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-gradient-to-r from-teal-500 to-pink-500 mix-blend-screen filter blur-3xl opacity-20 sm:h-96 sm:w-96 sm:opacity-25"
        />

        <motion.div
          animate={ {
            x: [ "0%", "20%", "-15%", "0%" ],
            y: [ "0%", "-10%", "15%", "0%" ],
          } }
          transition={ {
            duration: 28,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            delay: 10,
          } }
          className="absolute top-1/3 right-1/5 h-72 w-72 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 mix-blend-screen filter blur-3xl opacity-15 sm:h-96 sm:w-96 sm:opacity-20"
        />
      </div>
    </div>
  );
};

export default AnimatedBlobBackground;
