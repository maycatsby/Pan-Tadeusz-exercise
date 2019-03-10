const fs = require("fs"),
  path = require("path"),
  filePath = path.join(__dirname, process.argv[2]);

const md5 = require("js-md5");

fs.readFile(filePath, { encoding: "utf-8" }, function(err, data) {
  if (!err) {
    let rainbowArray = data
      .split("\r\n")
      .map(cur => `${cur}\t\t${md5(cur)}\r\n`)
      .join("\r\n");

    fs.writeFile("rainbow_word_list.txt", rainbowArray, err => {
      if (err) throw err;
      console.log("Lyric saved!");
    });
  } else {
    console.log(err);
  }
});
