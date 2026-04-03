"use client";


import { testimonialsData } from "@/lib/data";
import TestimonialCard from "@/components/custom-ui/TestimonialCard";
import { SectionHeading } from "@/components/custom-ui/SectionHeading";
import AnimatedBlobBackground from "@/components/custom-ui/AnimatedBlobBackground";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Vignette,
  ChromaticAberration,
  Noise
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";


export default function TestimonialsSection() {
  if (!testimonialsData || testimonialsData.length === 0) {
    return null;
  }

  const duplicatedTestimonials = [ ...testimonialsData, ...testimonialsData ];

  return (
    <section id="testimonials" className="py-24 sm:py-32 relative bg-gray-950 text-white overflow-hidden">
      <AnimatedBlobBackground />

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="Testimonials" subtitle="What My Collaborators Say" />
      </div>

      <div
        className="group relative mt-16 w-full overflow-hidden"
        style={ {
          maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)"
        } }
      >
        <div className="flex w-max animate-[scroll_40s_linear_infinite] gap-8 py-4 
        group-hover:[animation-play-state:paused]">
          {
            duplicatedTestimonials.map((testimonial, index) => (
              <div key={ index } className="w-[clamp(20rem,40vw,28rem)]">
                <TestimonialCard testimonial={ testimonial } />
              </div>
            ))
          }
        </div>
      </div>

      <div className="absolute inset-0 z-0">
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
      </div>
    </section>
  );
}
