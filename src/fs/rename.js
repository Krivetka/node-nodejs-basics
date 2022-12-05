import { existsSync, renameSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const wrongFilePath = __dirname + "/files/wrongFilename.txt";
  const correctFilePath = __dirname + "/files/properFilename.md";
  const errMessage = "FS operation failed";

  try {
    if (existsSync(correctFilePath) || !existsSync(wrongFilePath)) {
      throw new Error(errMessage);
    }
    renameSync(wrongFilePath, correctFilePath);
  } catch (error) {
    console.error(error);
  }
};

await rename();
