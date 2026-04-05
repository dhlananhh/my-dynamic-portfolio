// export-project.js
const fs = require("fs");
const path = require("path");

const outputFile = "project_code.txt";

// Các loại file cần gom
const extensions = [
  ".js",
  ".ts",
  ".tsx",
  ".json",
  ".css",
  ".prisma"
];

// Các thư mục cần bỏ qua
const ignoreDirs = [
  "node_modules",
  ".next",
  ".git",
  ".vscode",
  "public"
];

// Các đường dẫn cần bỏ qua riêng biệt
const ignorePaths = [
  path.join("src", "generated", "prisma"),
  path.join("prisma", "migrations"),
  path.join("src", "components", "ui"),
  path.join("src", "hooks"),
];

// Các file cụ thể cần bỏ qua
const ignoreFiles = [
  ".env",
  "package-lock.json",
  "yarn.lock",
  "bun.lock",
  "bunfig.toml",
  ".gitignore",
  "next-env.d.ts",
];

function shouldIgnore(fullPath) {
  const fileName = path.basename(fullPath);

  // Nếu là file schema.prisma thì giữ lại, không bỏ qua
  if (fileName === "schema.prisma") {
    return false;
  }

  return (
    ignoreDirs.some(dir => fullPath.includes(path.sep + dir + path.sep)) ||
    ignorePaths.some(ignore => fullPath.includes(ignore)) ||
    ignoreFiles.includes(fileName)
  );
}

function collectFiles(dir, outputStream) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (!shouldIgnore(fullPath)) {
        collectFiles(fullPath, outputStream);
      }
    } else if (extensions.includes(path.extname(item))) {
      if (!shouldIgnore(fullPath)) {
        outputStream.write(`\n===== ${fullPath} =====\n`);
        const content = fs.readFileSync(fullPath, "utf8");
        outputStream.write(content + "\n");
      }
    }
  }
}

function exportProject() {
  const outputStream = fs.createWriteStream(outputFile, { flags: "w" });
  collectFiles(process.cwd(), outputStream);
  outputStream.end(() => {
    console.log(`✅ Đã gom code vào file: ${outputFile}`);
  });
}

exportProject();
