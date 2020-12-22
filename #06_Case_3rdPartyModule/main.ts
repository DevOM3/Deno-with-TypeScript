import {
  camelCase,
  paramCase,
  pascalCase,
  snakeCase,
} from "https://deno.land/x/case/mod.ts";

const text = `I'm DevOM`;

const camel = camelCase(text);
const param = paramCase(text);
const pascal = pascalCase(text);
const snake = snakeCase(text);

console.table({
  camel,
  param,
  pascal,
  snake,
});
