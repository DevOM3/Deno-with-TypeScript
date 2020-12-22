import { readJson, writeJson } from "https://deno.land/std@0.81.0/fs/mod.ts";

const jsonObject = await readJson("file.json");
console.log(jsonObject);
