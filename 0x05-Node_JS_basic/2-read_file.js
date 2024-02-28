const fs = require("fs");
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, "utf8");
    const newData = data.split('\n');
    const CSlist = [];
    const SWElist = [];
    console.log(`Number of students: ${newData.length - 2}`);
    for (let i = 1; i <= 10; i++) {
      const tempList = newData[i].split(',');
      if (tempList[3] === 'CS') {
        CSlist.push(temp_list[0]);
      } else if (tempList[3] == 'SWE') {
        SWElist.push(temp_list[0]);
      }
    }
    console.log(`Number of students in CS: ${CSlist.length}. List: ${CSlist.join(', ')}`);
    console.log(`Number of students in SWE: ${SWElist.length}. List: ${SWElist.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
