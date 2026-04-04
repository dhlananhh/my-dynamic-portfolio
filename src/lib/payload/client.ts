import { getPayload, Payload } from "payload"
import config from "@/payload.config"

let payload: Awaited<ReturnType<typeof getPayload>> | null = null
export async function getPayloadClient() {
  if (!payload) {
    payload = await getPayload({ config })
  }
  return payload
}
