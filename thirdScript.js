const fs = require("fs"),
  path = require("path"),
  filePath = path.join(__dirname, process.argv[2]);
const table = require("table").table;

fs.readFile(filePath, { encoding: "utf-8" }, function(err, data) {
  if (!err) {
    let arr = data.split("\r\n");
    let solutionArray = arr.filter(cur => cur.includes(process.argv[3]));

    if (solutionArray) {
      let solutionString = solutionArray[0].split("\t\t")[0];
      let dataTable = [[process.argv[3], solutionString]];
      let solutionTable = table(dataTable);

      fs.writeFile("result.txt", solutionTable, err => {
        if (err) throw err;
        console.log(`Your password is "${solutionString}"`);
      });
    } else console.log(`this password doesn't exist in Pan Tadeusz`);
  } else {
    console.log(err);
  }
});
