import { existsSync, readFile } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = __dirname + "/files/fileToRead.txt";
  const errMessage = "FS operation failed";

  try {
    if (!existsSync(filePath)) {
      throw new Error(errMessage);
    }
    readFile(filePath, "utf8", (err, data) => {
      if (err) {
        throw new Error(err);
      }
      console.log(data);
    });
  } catch (error) {
    console.error(error);
  }
};

await read();
