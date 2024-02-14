const fs = require('fs');
let csvData = 'Name,Id,Amount\nJohn Doe,I00000XIOIUYU,5000';
csvData = csvData + '\n' + 'Mark Wilson,I00000XPOIUYU,4000';
fs.writeFileSync('SampleData.csv',csvData);