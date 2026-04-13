import dotenv from "dotenv";
import path from "path";
import sharp from "sharp";
import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Projects } from "./collections/Projects";
import { Certifications } from "./collections/Certificates";
import { Testimonials } from "./collections/Testimonials";
import { WorkExperiences } from "./collections/WorkExperiences";

dotenv.config({ path: path.resolve(process.cwd(), ".env") })

// kiểm tra biến môi trường đã load chưa
console.log("MONGODB_URI:", process.env.MONGODB_URI);


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
    outputFile: path.resolve(__dirname, "./payload-types.ts"),
    declare: false,
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "./payload-generated-schema.ts"),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio",
    connectOptions: {
      serverSelectionTimeoutMS: 5000,
      bufferCommands: false,
      family: 4
    },
  }),
  sharp,
  plugins: [

  ],
});

// module.exports = config;
