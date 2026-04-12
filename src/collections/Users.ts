import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "select",
      options: [ "admin", "editor", "viewer" ],
      defaultValue: "viewer",
    },
    {
      name: "avatar",
      type: "upload",
      relationTo: "media",
    },
  ]
};
