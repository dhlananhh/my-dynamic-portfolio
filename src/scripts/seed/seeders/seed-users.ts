import { Payload } from "payload"
import { isDuplicateError } from "../lib/is-duplicate-error"


export async function seedUsers(payload: Payload) {
  try {
    const response = await payload.create({
      collection: "users",
      data: {
        email: process.env.CMS_SEED_ADMIN_EMAIL!,
        password: process.env.CMS_SEED_ADMIN_PASSWORD!,
      },
    })
    console.log("✅ Admin user created:", response)
  } catch (error) {
    if (isDuplicateError(error, "email")) {
      console.log("⚠️ Admin user already exists, skipped seeding.")
    } else {
      console.error("❌ Error seeding admin user:", JSON.stringify(error, null, 2))
    }
  }
}
