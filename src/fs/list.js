import { existsSync, readdirSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const folderPath = __dirname + "/files";
  const errMessage = "FS operation failed";

  try {
    if (!existsSync(folderPath)) {
      throw new Error(errMessage);
    }
    console.log(readdirSync(folderPath));
  } catch (error) {
    console.error(error);
  }
};

await list();
