const fs = require("fs");

const files = [
    "index.html",
    "style.css",
    "script.js"
];

for (const file of files) {

    if (!fs.existsSync(file)) {
        throw new Error(`${file} does not exist`);
    }

    console.log(`PASS: ${file}`);
}

const html = fs.readFileSync("index.html", "utf8");

if (!html.includes("CI/CD Deployment Successful")) {
    throw new Error("Website text is missing");
}

if (!html.includes("Version: 2.0")) {
    throw new Error("Version 2.0 is missing");
}

console.log("All tests passed!");