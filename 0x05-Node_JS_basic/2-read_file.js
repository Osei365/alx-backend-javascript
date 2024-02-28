const fs = require('fs');
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const newData = data.split('\n');
    const CSlist = [];
    const SWElist = [];
    console.log(`Number of students: ${newData.length - 2}`);
    for (let i = 1; i <= 10; i++) {
      const tempList = newData[i].split(',');
      if (tempList[3] === 'CS') {
        CSlist.push(tempList[0]);
      } else if (tempList[3] == 'SWE') {
        SWElist.push(tempList[0]);
      }
    }
    const sentCS = 'Number of students in CS';
    const sentSWE = 'Number of students in SWE';
    console.log(`${sentCS}: ${CSlist.length}. List: ${CSlist.join(', ')}`);
    console.log(`${sentSWE}: ${SWElist.length}. List: ${SWElist.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
