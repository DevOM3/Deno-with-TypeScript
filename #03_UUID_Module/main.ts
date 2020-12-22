import { v4 } from "https://deno.land/std@0.81.0/uuid/mod.ts";

const uid = v4.generate();
console.log(uid);
