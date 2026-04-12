import { Payload } from "payload"
import { testimonialsData } from "@/lib/data"
import { isDuplicateError } from "../lib/is-duplicate-error"

/**
 * Seed testimonials, tham chiếu avatar từ media đã seed sẵn
 */
export async function seedTestimonials(payload: Payload) {
  for (const testimonial of testimonialsData) {
    try {
      // Tìm avatar đã seed sẵn theo alt (đặt bằng tên file key trong seed-images.ts)
      const mediaDocs = await payload.find({
        collection: "media",
        where: {
          alt: {
            equals: testimonial.author.replace(/\s+/g, ""), // hoặc bạn có thể map cụ thể
          },
        },
      })

      let avatarId: string | null = null
      if (mediaDocs.docs.length > 0) {
        avatarId = String(mediaDocs.docs[ 0 ].id)
      } else {
        console.warn(`⚠️ Avatar not found for testimonial: ${testimonial.author}`)
      }

      await payload.create({
        collection: "testimonials",
        data: {
          quote: testimonial.quote,
          author: testimonial.author,
          company: testimonial.company,
          avatarUrl: avatarId, // tham chiếu tới media nếu có
        },
      })

      console.log(`✅ Seeded testimonial from: ${testimonial.author}`)
    } catch (error) {
      if (isDuplicateError(error, "author")) {
        console.log(`⚠️ Skipped duplicate testimonial: ${testimonial.author}`)
      } else {
        console.error(`❌ Error seeding testimonial from ${testimonial.author}:`, error)
      }
    }
  }
}
