import { CollectionConfig } from "payload"

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: {
    useAsTitle: "author",
  },
  fields: [
    {
      name: "quote",
      type: "textarea",
      required: true,
    },
    {
      name: "author",
      type: "text",
      required: true,
    },
    {
      name: "company",
      type: "text",
    },
    {
      name: "avatarUrl",
      type: "relationship",
      relationTo: "media",
      required: false,
    },
  ],
}
