#!/usr/bin/env node
console.log(111);
console.log(process.argv);
process.argv.push("--cwd");
process.argv.push(process.cwd());
process.argv.push("--gulpfile");
process.argv.push(require.resolve(".."));
require("gulp/bin/gulp");
