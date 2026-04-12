import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      label: "Project name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      unique: true,
      required: true,
    },
    {
      name: "category",
      label: "Category",
      type: "select",
      options: [ "Web", "Mobile", "AI", "Game", "Data" ],
      required: true,
    },
    {
      name: "projectStatus",
      label: "Project status",
      type: "select",
      options: [ "Completed", "In Progress", "Planned" ],
      required: true,
    },
    {
      name: "techstack",
      label: "Tech Stack",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "tool",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "shortDescription",
      type: "textarea",
      required: true,
    },
    {
      name: "description",
      type: "richText",
      required: true,
    },
    {
      name: "githubUrl",
      type: "text",
    },
    {
      name: "liveDemoUrl",
      type: "text",
    },
    {
      name: "imageUrl",
      label: "Project thumbnail image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};
