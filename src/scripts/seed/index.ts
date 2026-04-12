import payload from "payload"
import dotenv from "dotenv"
import config from "@payload-config"

import { seedMedia } from "./seeders/seed-media"
import { seedUsers } from "./seeders/seed-users"
import { seedProjects } from "./seeders/seed-projects"
import { seedTestimonials } from "./seeders/seed-testimonials"
import { seedWorkExperiences } from "./seeders/seed-work-experiences"
import { seedCertifications } from "./seeders/seed-certifications"


// load biến môi trường từ .env
dotenv.config()


async function main() {
  try {
    // Khởi tạo Payload CMS client với config object
    await payload.init({ config })

    // Seed media trước để quản lý tập trung
    await seedMedia(payload)

    // Gọi lần lượt các seeders khác
    await seedUsers(payload)
    await seedProjects(payload)
    await seedTestimonials(payload)
    await seedWorkExperiences(payload)
    await seedCertifications(payload)

    console.log("✅ Seeding completed!")
    process.exit(0)
  } catch (error) {
    console.error("❌ Seeding failed:", error)
    process.exit(1)
  }
}

// chạy script
void main()
