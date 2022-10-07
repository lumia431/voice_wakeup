const fs = require('fs');

module.exports = function(path, filesList) {
    files = fs.readdirSync(path); // 需要用到同步读取
    files.forEach((file) => {
          
          states = fs.statSync(path + "/" + file);
          // ❤❤❤ 判断是否是目录，是就继续递归
          if (states.isDirectory()) {
              readFile(path + "/" + file, filesList);
          } else {
              // 不是就将文件push进数组，此处可以正则匹配是否是 .js 先忽略
              filesList.push(file);
          }
    });
}