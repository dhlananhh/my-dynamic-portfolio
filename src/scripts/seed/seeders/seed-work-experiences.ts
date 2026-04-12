import { Payload } from "payload"
import { workExperiencesData } from "@/lib/data"
import { isDuplicateError } from "../lib/is-duplicate-error"

/**
 * Seed work experiences, tham chiếu logo công ty từ media đã seed sẵn
 */
export async function seedWorkExperiences(payload: Payload) {
  for (const exp of workExperiencesData) {
    try {
      // Tìm logo công ty đã seed sẵn theo alt (ví dụ: tên công ty hoặc key trong seed-images.ts)
      const mediaDocs = await payload.find({
        collection: "media",
        where: {
          alt: {
            equals: exp.company.replace(/\s+/g, ""), // hoặc map cụ thể nếu cần
          },
        },
      })

      let logoId: string | null = null
      if (mediaDocs.docs.length > 0) {
        logoId = String(mediaDocs.docs[ 0 ].id) // ép kiểu về string
      } else {
        console.warn(`⚠️ Logo not found for work experience: ${exp.company}`)
      }

      await payload.create({
        collection: "work-experiences",
        data: {
          company: exp.company,
          role: exp.role,
          startDate: exp.startDate,
          endDate: exp.endDate,
          description: exp.description,
          responsibilities: exp.responsibilities,
          logoUrl: logoId, // tham chiếu tới media nếu có
        },
      })

      console.log(`✅ Seeded work experience at: ${exp.company}`)
    } catch (error) {
      if (isDuplicateError(error, "company")) {
        console.log(`⚠️ Skipped duplicate work experience: ${exp.company}`)
      } else {
        console.error(`❌ Error seeding work experience at ${exp.company}:`, error)
      }
    }
  }
}
