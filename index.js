const fs = require('fs'),
  path = require('path'),
  exec = require('child_process').exec;

// check if the second argument is empty
let rootDir = process.argv[2];
if (!rootDir) {
  console.log("Usage: npm start [Directory to clean]");
  process.exit(0);
} else {
  rootDir = path.resolve(rootDir);
  console.log("Trying to clean up npm_modules within directory:", rootDir);
}

function checkDir(dir) {
  let files = fs.readdirSync(dir);
  let subDirs = [];
  let npmDir = null;

  for (var i = 0, len = files.length; i < len; i++) {
    let absPath = path.resolve(dir, files[i]);
    // console.log(absPath);
    if (fs.statSync(absPath).isDirectory()) {
      if (files[i] === "node_modules") {
        npmDir = absPath;
        break;
      } else {
        subDirs.push(absPath);
      }
    }
  }

  if (!!npmDir) {
    console.log("Start deleting", npmDir);
    exec('rm -rf ' + npmDir, (err, stdout, stderr) => {
      console.log("--Folder deleted:", npmDir);
    });
  } else {
    for (i = 0, len = subDirs.length; i < len; i++) {
      checkDir(subDirs[i]);
    };
  }
}

checkDir(rootDir);