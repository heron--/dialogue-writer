const config = {
  plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  importOrder: ["^[a-zA-Z]", "^@.*/(.*)$", "^\\~/(.*)$", "\\./(.*)$", "\\.\\./(.*)$"],
};

export default config;
