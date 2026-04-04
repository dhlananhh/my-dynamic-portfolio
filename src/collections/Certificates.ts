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
      label: "Tên chứng chỉ",
      type: "text",
      required: true,
    },
    {
      name: "issuer",
      label: "Đơn vị cấp",
      type: "text",
      required: true,
    },
    {
      name: "issueDate",
      label: "Ngày cấp",
      type: "text",
      required: true,
    },
    {
      name: "score",
      label: "Điểm số",
      type: "text",
      admin: {
        description: "Bỏ trống nếu chứng chỉ không có điểm số",
      },
    },
    {
      name: "order",
      label: "Thứ tự hiển thị",
      type: "number",
      defaultValue: 0,
      admin: {
        position: "sidebar",
      }
    },
  ],
};
