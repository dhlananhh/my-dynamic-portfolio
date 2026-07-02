import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.ANTHROPIC_BASE_URL!;
const API_KEY = process.env.ANTHROPIC_API_KEY!;
const MODEL = process.env.ANTHROPIC_API_MODEL!;

async function runClaude() {
  try {
    const response = await axios.post(
      BASE_URL,
      {
        model: MODEL,
        messages: [
          { role: "user", content: "Hãy viết một hàm Python tính giai thừa" }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log(JSON.stringify(response.data, null, 2));
  } catch (error: any) {
    console.error(error.response ? error.response.data : error.message);
  }
}

runClaude();
