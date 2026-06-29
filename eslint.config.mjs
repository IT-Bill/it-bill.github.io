import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

const nodeGlobals = {
  Buffer: "readonly",
  URL: "readonly",
  console: "readonly",
  fetch: "readonly",
  process: "readonly",
};

const eslintConfig = defineConfig([
  globalIgnores([
    ".astro/**",
    ".next/**",
    "build/**",
    "dist/**",
    "node_modules/**",
    "out/**",
    "docs/research/**/*.js",
  ]),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs["flat/recommended"],
  {
    files: ["*.mjs", "*.js", "scripts/**/*.mjs", "scripts/**/*.js"],
    languageOptions: {
      globals: nodeGlobals,
    },
  },
]);

export default eslintConfig;
