import { access } from "node:fs";
import { writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const fileText = "I am fresh and young";
  const srcPath = __dirname + "/files/fresh.txt";
  const errMessage = "FS operation failed";

  access(srcPath, (error) => {
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
