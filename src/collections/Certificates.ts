import type { CollectionConfig } from "payload";

export const Certifications: CollectionConfig = {
  slug: "certifications",
  admin: {
    useAsTitle: "name",
    defaultColumns: [ "name", "issuer", "issueDate" ],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      label: "Certificate name",
      type: "text",
      required: true,
    },
    {
      name: "issuer",
      label: "Issuer",
      type: "text",
      required: true,
    },
    {
      name: "issueDate",
      label: "Issue date",
      type: "text",
      required: true,
    },
    {
      name: "score",
      label: "Score",
      type: "text",
      admin: {
        description: "Leave blank if the certificate does not have a score.",
      },
    },
    {
      name: "order",
      label: "Display order",
      type: "number",
      defaultValue: 0,
      admin: {
        position: "sidebar",
      }
    },
    {
      name: "imageUrl",
      type: "relationship",
      relationTo: "media",
      required: false,
    },
  ],
};
