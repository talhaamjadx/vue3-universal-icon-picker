import vue from "@vitejs/plugin-vue";
const path = require("path");
const replace = require("@rollup/plugin-replace");

export default {
  plugins: [
    vue(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/entry.js"),
      name: "Vue3IconPicker",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
};
