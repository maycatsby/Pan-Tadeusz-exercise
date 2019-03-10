const fs = require("fs"),
  path = require("path"),
  filePath = path.join(__dirname, "pan_tadeusz.txt");

fs.readFile(filePath, { encoding: "utf-8" }, function(err, data) {
  if (!err) {
    const wordList = data
      .replace(/([\.,#?!—$%^&*;:{}«…»=\-_`~\(\)])/g, "")
      .replace(/(?:\r\n|\r|\n)/g, " ")
      .split(" ")
      .filter(cur => cur !== "");

    let k = "\r\n";
    for (let i = 0; i < wordList.length; i++) {
      if (k.includes(`\r\n${wordList[i]}\r\n`)) {
        continue;
      }
      k += `${wordList[i]}\r\n`;
    }

    fs.writeFile("word_list.txt", k.substring(2), err => {
      if (err) throw err;
      console.log("Lyric saved!");
    });
  } else {
    console.log(err);
  }
});
