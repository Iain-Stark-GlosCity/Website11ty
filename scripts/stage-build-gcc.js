/**
 * stage-build-gcc.js
 *
 * Prebuild script for the GCC template build.
 * Clears src/pages/ then copies build-gcc/ into it,
 * keeping /build/ (GOV.UK source) untouched.
 */
const fs   = require("fs");
const path = require("path");

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    entry.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  }
}

const srcDir   = path.resolve(__dirname, "../build-gcc");
const destDir  = path.resolve(__dirname, "../src/pages");

// Clear previous staged pages
if (fs.existsSync(destDir)) {
  fs.rmSync(destDir, { recursive: true, force: true });
}

copyDir(srcDir, destDir);
console.log("Staged GCC markdown from /build-gcc into src/pages/");
