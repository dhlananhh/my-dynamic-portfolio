import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";


const eslintConfig = defineConfig([
  // Inherit the default configuration of Next.js
  ...nextVitals,
  ...nextTs,

  // Override default ignores of eslint-config-next.
  globalIgnores([
    "node_modules/**",
    ".next/**",
    ".husky/**",
    "out/**",
    "build/**",
    "public/**",
    "next-env.d.ts",
    "globals.d.ts",
    "src/payload-types.ts",
    "src/payload-generated-schema.ts",
  ]),

  // Additional custom configurations
  {
    parser: "@typescript-eslint/parser",
    plugins: [ "@typescript-eslint", "react" ],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "prettier"
    ],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "react/jsx-curly-spacing": [
        "error",
        {
          when: "never",
          children: true
        }
      ]
    }
  }
]);


export default eslintConfig;
