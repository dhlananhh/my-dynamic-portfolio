import { Payload } from "payload"
import { projectsData } from "@/lib/data"
import { isDuplicateError } from "../lib/is-duplicate-error"
import { slugify } from "payload/shared"

/**
 * Seed projects, tham chiếu đến media đã seed sẵn trong collection "media"
 */
export async function seedProjects(payload: Payload) {
  for (const project of projectsData) {
    try {
      // Tìm media đã seed sẵn theo alt (đặt bằng project.title trong seed-media.ts)
      const mediaDocs = await payload.find({
        collection: "media",
        where: {
          alt: {
            equals: project.title,
          },
        },
      })

      if (!mediaDocs.docs.length) {
        console.warn(`⚠️ Media not found for project: ${project.title}`)
        continue
      }

      const mediaDoc = mediaDocs.docs[ 0 ]

      await payload.create({
        collection: "projects",
        data: {
          title: project.title,
          // Nếu project.slug có sẵn thì dùng, nếu không thì auto-generate từ title
          slug: project.slug || slugify(project.title.trim()),
          category: project.category,
          projectStatus: project.projectStatus,
          techstack: project.tools.map(tool => ({ tool })),
          shortDescription: project.shortDescription,
          description: project.description,
          githubUrl: project.githubUrl,
          liveDemoUrl: project.liveDemoUrl,
          imageUrl: mediaDoc.id, // tham chiếu đến media đã seed
        },
      })

      console.log(`✅ Seeded project: ${project.title}`)
    } catch (error) {
      if (isDuplicateError(error, "slug")) {
        console.log(`⚠️ Skipped duplicate project: ${project.slug}`)
      } else {
        console.error(`❌ Error seeding project ${project.title}:`, error)
      }
    }
  }
}
