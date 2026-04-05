"use client";


import { Download, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/custom-ui/SectionHeading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedBlobBackground from "@/components/custom-ui/AnimatedBlobBackground";
// import { Canvas } from "@react-three/fiber";
// import { Stars } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Vignette,
  ChromaticAberration,
  Noise
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";


const resumeLink = "/resume/LanAnh_Frontend_CV.pdf";
const resumeFilename = "LanAnh_Frontend_CV.pdf";


export default function ResumeSection() {
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.1 }
    },
  };

  const buttonsContainerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.2 }
    },
  };

  return (
    <section
      id="resume"
      className="py-24 sm:py-32 relative bg-gray-950 text-white text-center overflow-hidden"
    >
      <AnimatedBlobBackground />

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="Resume" subtitle="My Professional Background" />

        <motion.p
          variants={ paragraphVariants }
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true, amount: 0.5 } }
          className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto mt-10"
        >
          Take a look at my professional experience and skills. You can view it directly in your browser or download a PDF copy for your convenience.
        </motion.p>

        <motion.div
          variants={ buttonsContainerVariants }
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true, amount: 0.5 } }
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
        >
          <Button
            asChild
            size="lg"
            className="text-white bg-linear-to-br from-green-400 to-blue-600 hover:bg-linear-to-bl focus:ring-4 focus:outline-hidden focus:ring-green-200 font-medium rounded-lg text-lg px-6 py-3 text-center"
          >
            <Link
              href={ resumeLink }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center"
            >
              <Eye size={ 50 } className="mr-2" />
              View Online
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-gray-700/80 border-gray-400 text-gray-200 hover:text-white hover:bg-gray-800/50 focus:ring-4 focus:outline-hidden focus:ring-gray-600 font-medium rounded-lg text-lg px-6 py-3 text-center"
          >
            <Link
              href={ resumeLink }
              download={ resumeFilename }
              className="inline-flex items-center justify-center"
            >
              <Download size={ 20 } className="mr-2" />
              Download CV (.pdf)
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={ 50 } count={ 2500 } factor={ 4 } fade speed={ 2 } />
          <EffectComposer>
            <Bloom
              luminanceThreshold={ 0.2 }
              intensity={ 0.8 }
              mipmapBlur={ true }
            />
            <ChromaticAberration
              offset={ [ 0.001, 0.001 ] }
              radialModulation={ true }
              modulationOffset={ 0.1 }
            />
            <Noise
              premultiply
              blendFunction={ BlendFunction.ADD }
              opacity={ 0.05 }
            />
            <Vignette
              eskil={ false }
              offset={ 0.1 }
              darkness={ 0.9 }
            />
          </EffectComposer>
        </Canvas>
      </div> */}
    </section>
  );
}
