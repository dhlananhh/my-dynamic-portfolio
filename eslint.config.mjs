import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "globals.d.ts",
      "src/payload-types.ts",
      "src/payload-generated-schema.ts",
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": [
      "@typescript-eslint",
    ],
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
    ],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "react/jsx-curly-spacing": [
        "error", {
          "when": "never",
          "children": true
        }
      ]
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "prettier"
    ]
  }
];

export default eslintConfig;
