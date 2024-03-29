import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
    },
    {
      file: "dist/index.es.js",
      format: "es",
      exports: "named",
    },
  ],
  plugins: [
    postcss({
      plugins: [],
      minimize: true,
    }),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/env", "@babel/preset-react"],
      babelHelpers: "bundled",
    }),
    external(),
    resolve(),
    terser(),
  ],
  external: ["react", "react-dom"],
};