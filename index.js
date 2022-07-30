const fs = require("fs");
const path = require("path");
const {
  readFile,
  CSV_KEYS,
  createSecondFile,
  createFirstFile,
} = require("./utils");
const DIR_PATH = path.join(__dirname, "input");

fs.readdir(DIR_PATH, function (err, files) {
  const csvFiles = files.filter((el) => path.extname(el) === ".csv");
  if (!csvFiles?.length) {
    console.log("ATTENTION: Add files to continue");
    return;
  }

  console.log("Reading files ...");
  for (const fileName of csvFiles) {
    console.log("============ START FILE: " + fileName + " ==============");
    const fileContent = readFile(`${DIR_PATH}/${fileName}`);
    const ordersLength = fileContent?.length;
    const firstAcc = {};
    const secondAcc = {};

    fileContent.forEach((row) => {
      firstAcc[row[CSV_KEYS.name]] =
        (firstAcc[row[CSV_KEYS.name]] ? firstAcc[row[CSV_KEYS.name]] : 0) +
        Number(row[CSV_KEYS.quantity]);

      secondAcc[row[CSV_KEYS.name]] = {
        ...secondAcc[row[CSV_KEYS.name]],
        [row[CSV_KEYS.brand]]:
          secondAcc[row[CSV_KEYS.name]] &&
          secondAcc[row[CSV_KEYS.name]].hasOwnProperty([row[CSV_KEYS.brand]])
            ? secondAcc[row[CSV_KEYS.name]][row[CSV_KEYS.brand]] + 1
            : 1,
      };
    });

    createFirstFile(fileName, firstAcc, ordersLength);
    createSecondFile(fileName, secondAcc);
    console.log("============ END FILE: " + fileName + " ================");
  }
});
