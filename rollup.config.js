import html from "rollup-plugin-html";
import minify from "rollup-plugin-babel-minify";
import babel from "rollup-plugin-babel";

const fileName = "myuw-card";
const objName = "MyUWCard";

const htmlConfig = {
  include: "src/**/*.html",
  htmlMinifierOptions: {
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    conservativeCollapse: true,
  },
};

const pluginConfig = {
  full: [html(htmlConfig), babel({ exclude: "node_modules/**" })],
  min: [html(htmlConfig), minify(), babel({ exclude: "node_modules/**" })],
};

export default [
  // Non-minified IIFE bundle
  {
    input: "src/index.js",
    plugins: pluginConfig.full,
    output: {
      file: `dist/${fileName}.js`,
      name: objName,
      format: "iife",
    },
  },
  // Minified IIFE bundle
  {
    input: "src/index.js",
    plugins: pluginConfig.min,
    output: {
      file: `dist/${fileName}.min.js`,
      name: objName,
      format: "iife",
    },
  },
  // Non-minified ES module
  {
    input: "src/index.js",
    plugins: pluginConfig.full,
    output: {
      file: `dist/${fileName}.mjs`,
      name: objName,
      format: "es",
    },
  },
  // Minified ES module
  {
    input: "src/index.js",
    plugins: pluginConfig.min,
    output: {
      file: `dist/${fileName}.min.mjs`,
      name: objName,
      format: "es",
    },
  },
];
