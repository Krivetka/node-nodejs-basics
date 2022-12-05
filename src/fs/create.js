import { writeFile } from "node:fs/promises";
import fs from "node:fs";

const create = async () => {
  const fileText = "I am fresh and young";
  const srcPath = "src/fs//files/fresh.txt";
  const errMessage = "FS operation failed";

  fs.access(srcPath, (error) => {
    try {
      if (error) {
        writeFile(srcPath, fileText);
      } else {
        throw new Error(errMessage);
      }
    } catch (error) {
      console.error(error);
    }
  });
};

await create();
