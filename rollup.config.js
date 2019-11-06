import html from "rollup-plugin-html";
import minify from "rollup-plugin-babel-minify";
import babel from "rollup-plugin-babel";

const fileName = "myuw-card";
const objName = "MyUWCard";

const htmlConfig = {
  include: "src/*.html",
  htmlMinifierOptions: {
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    conservativeCollapse: true,
  },
};

const pluginConfig = {
  full: [html(htmlConfig)],
  min: [html(htmlConfig), minify()],
};

export default [
  // Non-minified IIFE bundle
  {
    input: "index.js",
    plugins: pluginConfig.full.concat([babel({ exclude: "node_modules/**" })]),
    output: {
      file: `dist/${fileName}.js`,
      name: objName,
      format: "iife",
    },
  },
  // Minified IIFE bundle
  {
    input: "index.js",
    plugins: pluginConfig.min.concat([babel({ exclude: "node_modules/**" })]),
    output: {
      file: `dist/${fileName}.min.js`,
      name: objName,
      format: "iife",
    },
  },
  // Non-minified ES module
  {
    input: "index.js",
    plugins: pluginConfig.full.concat([babel({ exclude: "node_modules/**" })]),
    output: {
      file: `dist/${fileName}.mjs`,
      name: objName,
      format: "es",
    },
  },
  // Minified ES module
  {
    input: "index.js",
    plugins: pluginConfig.min.concat([babel({ exclude: "node_modules/**" })]),
    output: {
      file: `dist/${fileName}.min.mjs`,
      name: objName,
      format: "es",
    },
  },
];
