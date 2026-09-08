const fs = require("fs");

const requiredFiles = [
    "index.html",
    "style.css",
    "script.js"
];

for (const file of requiredFiles) {
    if (!fs.existsSync(file)) {
        throw new Error(`${file} is missing`);
    }

    console.log(`PASS: ${file} exists`);
}

const html = fs.readFileSync("index.html", "utf8");

if (!html.includes("CI/CD Deployment Successful")) {
    throw new Error("Website content test failed");
}

if (!html.includes("Version: 1.0")) {
    throw new Error("Version test failed");
}

console.log("All tests passed!");