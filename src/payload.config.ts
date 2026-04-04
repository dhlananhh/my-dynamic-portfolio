import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import sharp from "sharp"
import { fileURLToPath } from "url";
import { Users } from "@/collections/Users";
import { Media } from "@/collections/Media";
import { Projects } from "@/collections/Projects";
import { Certifications } from "@/collections/Certificates";


const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);


export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [ Users, Media, Projects, Certifications ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || "strongp@ssword123",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
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
