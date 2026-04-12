import type { Buffer } from "node:buffer"
import { getPlaiceholder } from "plaiceholder"


/**
 * Kiểm tra mime type có phù hợp để tạo blur data URL hay không
 */
export function isEligibleForBlurDataURL(mime?: string | null) {
  if (!mime?.startsWith("image/"))
    return false
  if (mime === "image/svg+xml")
    return false
  return true
}

/**
 * Tạo blur data URL từ buffer ảnh
 */
export async function generateBlurDataURL(
  buffer?: Buffer<ArrayBufferLike>,
): Promise<string | null> {
  if (!buffer) {
    console.warn("⚠️ Failed to generate blur data URL: missing buffer")
    return null
  }

  const { base64 } = await getPlaiceholder(buffer)
  return base64
}
