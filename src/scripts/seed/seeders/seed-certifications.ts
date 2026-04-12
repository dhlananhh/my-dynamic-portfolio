import { Payload } from "payload"
import { certificationsData } from "@/lib/data"
import { isDuplicateError } from "../lib/is-duplicate-error"

/**
 * Seed certifications, tham chiếu logo chứng chỉ từ media đã seed sẵn
 */
export async function seedCertifications(payload: Payload) {
  for (const cert of certificationsData) {
    try {
      // Tìm logo chứng chỉ đã seed sẵn theo alt (ví dụ: tên chứng chỉ hoặc issuer)
      const mediaDocs = await payload.find({
        collection: "media",
        where: {
          alt: {
            equals: cert.name.replace(/\s+/g, ""), // hoặc map cụ thể nếu cần
          },
        },
      })

      let logoId: string | null = null
      if (mediaDocs.docs.length > 0) {
        logoId = String(mediaDocs.docs[ 0 ].id) // ép kiểu về string
      } else {
        console.warn(`⚠️ Logo not found for certification: ${cert.name}`)
      }

      await payload.create({
        collection: "certifications",
        data: {
          name: cert.name,
          issuer: cert.issuer,
          issueDate: cert.date,
          score: cert.score,
          logoUrl: logoId, // tham chiếu tới media nếu có
        },
      })

      console.log(`✅ Seeded certification: ${cert.name}`)
    } catch (error) {
      if (isDuplicateError(error, "name")) {
        console.log(`⚠️ Skipped duplicate certification: ${cert.name}`)
      } else {
        console.error(`❌ Error seeding certification ${cert.name}:`, error)
      }
    }
  }
}
