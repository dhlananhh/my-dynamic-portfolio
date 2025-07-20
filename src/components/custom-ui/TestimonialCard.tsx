"use client";

import Image from "next/legacy/image";
import { Quote } from "lucide-react";
import { Testimonial } from "@/lib/data";
import { Images } from "@/lib/images";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="relative w-full h-full cursor-pointer overflow-hidden rounded-2xl p-6
    border border-slate-700/80 bg-slate-800/60 backdrop-blur-lg shadow-lg">
      <div className="flex flex-col h-full gap-y-4">
        <Quote className="h-8 w-8 text-teal-500/80" />
        <blockquote className="text-slate-200 text-lg leading-relaxed italic flex-grow">
          &quot;{ testimonial.quote }&quot;
        </blockquote>
        <figcaption className="mt-4 flex items-center gap-4">
          <Image
            src={ testimonial.avatarUrl || Images.DefaultAvatar }
            alt={ testimonial.author }
            width={ 48 }
            height={ 48 }
            className="h-12 w-12 rounded-full object-cover border-2 border-slate-600"
          />
          <div className="flex flex-col">
            <cite className="font-semibold not-italic text-teal-400">
              { testimonial.author }
            </cite>
            <cite className="text-sm not-italic text-slate-400">
              { testimonial.company }
            </cite>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
