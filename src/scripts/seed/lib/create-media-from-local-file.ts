import fs from "fs"
import path from "path"
import { Payload } from "payload"
import {
  generateBlurDataURL,
  isEligibleForBlurDataURL
} from "./generate-blur-data-url"


export async function createMediaFromLocalFile(
  payload: Payload,
  relativePath: string,
  alt: string
) {
  const filePath = path.resolve(process.cwd(), "public", relativePath)
  const buffer = fs.readFileSync(filePath)

  let blurDataURL: string | null = null
  if (isEligibleForBlurDataURL("image/png")) {
    blurDataURL = await generateBlurDataURL(buffer)
  }

  return await payload.create({
    collection: "media",
    file: {
      data: buffer,
      name: path.basename(filePath),
      mimetype: "image/png",
      size: buffer.length,
    },
    data: {
      alt,
      blurDataURL,
    },
  })
}
