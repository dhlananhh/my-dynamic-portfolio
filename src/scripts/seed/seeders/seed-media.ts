import fs from "fs"
import path from "path"
import { Payload } from "payload"
import { SeedImages } from "./seed-images"
import {
  generateBlurDataURL,
  isEligibleForBlurDataURL
} from "../lib/generate-blur-data-url"


/**
 * Seed tất cả ảnh từ thư mục public vào collection media
 */
export async function seedMedia(payload: Payload) {
  for (const [ key, relativePath ] of Object.entries(SeedImages)) {
    try {
      // Tạo đường dẫn tuyệt đối tới file ảnh trong thư mục public
      const filePath = path.resolve(process.cwd(), "public", relativePath)
      const buffer = fs.readFileSync(filePath)

      // Xác định mime type từ phần mở rộng file
      const ext = path.extname(filePath).toLowerCase()
      let mimeType = "image/png"
      if (ext === ".jpg" || ext === ".jpeg")
        mimeType = "image/jpeg"
      if (ext === ".gif")
        mimeType = "image/gif"
      if (ext === ".webp")
        mimeType = "image/webp"

      // Tạo blurDataURL nếu hợp lệ
      let blurDataURL: string | null = null
      if (isEligibleForBlurDataURL(mimeType)) {
        blurDataURL = await generateBlurDataURL(buffer)
      }

      // Upload vào Payload CMS
      const mediaDoc = await payload.create({
        collection: "media",
        file: {
          data: buffer,
          name: path.basename(filePath),
          mimetype: mimeType,
          size: buffer.length,
        },
        data: {
          alt: key,        // dùng key làm alt text (đồng bộ với project.title hoặc avatar name)
          blurDataURL,     // lưu base64 placeholder
        },
      })

      console.log(`✅ Seeded media: ${key} (${mediaDoc.id})`)
    } catch (error) {
      console.error(`❌ Error seeding media ${key}:`, error)
    }
  }
}
