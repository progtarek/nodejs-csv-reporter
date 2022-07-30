const fs = require("fs");
const path = require("path");

const OUT_PATH = path.join(__dirname, "output");

const _getMaxInObj = (obj) => {
  if (!obj || !Object.keys(obj)?.length) return;
  let max = Math.max(...Object.values(obj));
  return Object.keys(obj).find((k) => obj[k] === max);
};

module.exports.CSV_KEYS = {
  id: 0,
  area: 1,
  name: 2,
  quantity: 3,
  brand: 4,
};

module.exports.readFile = (filePath) => {
  if (!filePath) throw Error("File path is required");
  return fs
    .readFileSync(filePath)
    .toString()
    .split("\n")
    .map((e) => e.trim())
    .map((e) => e.split(",").map((e) => e.trim()));
};

module.exports.createFirstFile = (fileName, obj, ordersLength) => {
  if (!obj || !Object.keys(obj)?.length || !ordersLength) return;
  let data = ``;
  for (const [key, value] of Object.entries(obj)) {
    data += `${key},${value / ordersLength}\n`;
  }
  fs.writeFileSync(`${OUT_PATH}/0_${fileName}`, data);
  console.log("SUCCESS: Created first file for " + fileName);
};

module.exports.createSecondFile = (fileName, obj) => {
  if (!obj || !Object.keys(obj)?.length) return;
  let data = ``;
  for (const [key, value] of Object.entries(obj)) {
    data += `${key},${_getMaxInObj(value)}\n`;
  }
  fs.writeFileSync(`${OUT_PATH}/1_${fileName}`, data);
  console.log("SUCCESS: Created second file for " + fileName);
};
