import { existsSync } from "node:fs";
import { unlink } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const removeFilePath = __dirname + "/files/fileToRemove.txt";
  const errMessage = "FS operation failed";

  try {
    if (!existsSync(removeFilePath)) {
      throw new Error(errMessage);
    }
    unlink(removeFilePath);
  } catch (error) {
    console.error(error);
  }
};

await remove();
