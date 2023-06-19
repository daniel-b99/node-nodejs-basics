import * as fs from "fs";
import * as path from "path";

const create = async () => {
    const newFile = 'fresh.txt';
    const newFileContent = 'I am fresh an young';
    const folderPath = 'files'
    const filePath = path.join(folderPath, newFile)
    const error = 'FS operation failed'

fs.access(filePath, fs.constants.F_OK, (err) => {
  if (!err) {
    console.error(error);
    return;
  }

  fs.writeFile(filePath, newFileContent, (err) => {
    if (err) {
      console.error('Error during file creation', err);
      return;
    }

    console.log('fresh.txt has been created!');
  });
});

};

await create();