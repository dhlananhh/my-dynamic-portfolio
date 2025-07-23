"use client";

import { testimonialsData } from "@/lib/data";
import TestimonialCard from "@/components/custom-ui/TestimonialCard";
import { SectionHeading } from "@/components/custom-ui/SectionHeading";

export default function TestimonialsSection() {
  if (!testimonialsData || testimonialsData.length === 0) {
    return null;
  }

  const duplicatedTestimonials = [ ...testimonialsData, ...testimonialsData ];

  return (
    <section id="testimonials" className="py-24 sm:py-32 relative bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-70 sm:opacity-100">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="Testimonials" subtitle="What My Collaborators Say" />
      </div>

      <div
        className="group relative mt-16 w-full overflow-hidden"
        style={ {
          maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)"
        } }
      >
        <div className="flex w-max animate-[scroll_40s_linear_infinite] gap-8 py-4 group-hover:[animation-play-state:paused]">
          { duplicatedTestimonials.map((testimonial, index) => (
            <div key={ index } className="w-[clamp(20rem,40vw,28rem)]">
              <TestimonialCard testimonial={ testimonial } />
            </div>
          )) }
        </div>
      </div>
    </section>
  );
}
