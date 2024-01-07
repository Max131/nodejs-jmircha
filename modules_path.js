import { join, resolve } from "path";

const dir = "./lorem/ipsum";
const file = "modules_url.js";

const joinPath = join(dir, file);
const absPath = resolve(dir, file);

console.log({ joinPath });
console.log({ absPath });
