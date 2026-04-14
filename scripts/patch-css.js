const fs = require("fs");

const prefix = process.env.PATHPREFIX || "/";
if (prefix === "/") process.exit(0);

const file = "_site/assets/govuk-frontend.min.css";
const css = fs.readFileSync(file, "utf8");
fs.writeFileSync(file, css.replaceAll("url(/assets/", `url(${prefix}assets/`));
console.log(`Patched font paths in ${file} with prefix ${prefix}`);
