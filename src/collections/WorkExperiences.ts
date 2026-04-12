import { CollectionConfig } from "payload"

export const WorkExperiences: CollectionConfig = {
  slug: "work-experiences",
  admin: {
    useAsTitle: "company",
  },
  fields: [
    {
      name: "company",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "text",
      required: true,
    },
    {
      name: "startDate",
      type: "text",
      required: true,
    },
    {
      name: "endDate",
      type: "text",
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "responsibilities",
      type: "array",
      fields: [
        {
          name: "item",
          type: "text",
        },
      ],
    },
  ],
}
