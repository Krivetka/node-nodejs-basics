import { existsSync, renameSync } from "node:fs";

const rename = async () => {
  const wrongFilePath = "src/fs/files/wrongFilename.txt";
  const correctFilePath = "src/fs//files/properFilename.md";
  const errMessage = "FS operation failed";

  try {
    if (existsSync(correctFilePath) || !existsSync(wrongFilePath)) {
      throw new Error(errMessage);
    }
    await renameSync(wrongFilePath, correctFilePath);
  } catch (error) {
    console.error(error);
  }
};

await rename();
