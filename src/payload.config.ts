import dotenv from "dotenv";
dotenv.config();

// kiểm tra biến môi trường đã load chưa
console.log("MONGODB_URI:", process.env.MONGODB_URI);

import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import sharp from "sharp"
import { fileURLToPath } from "url";
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Projects } from "./collections/Projects";
import { Certifications } from "./collections/Certificates";
import { Testimonials } from "./collections/Testimonials";
import { WorkExperiences } from "./collections/WorkExperiences";


export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Media,
    Projects,
    Certifications,
    Testimonials,
    WorkExperiences,
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || "strongp@ssword123",
  typescript: {
    // outputFile: path.resolve(dirname, "../src/payload-types.ts"),
    outputFile: path.resolve(process.cwd(), "src/payload-types.ts"),
    declare: false,
  },
  graphQL: {
    schemaOutputFile: path.resolve(process.cwd(), "src/payload-generated-schema.ts"),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio",
    connectOptions: {
      serverSelectionTimeoutMS: 5000,
      bufferCommands: false,
      family: 4
    }
  }),
  sharp,
  plugins: [

  ],
});
