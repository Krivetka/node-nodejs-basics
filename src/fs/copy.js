import { cp } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const srcPath = __dirname+"/files";
  const copyPath = __dirname+"/files_copy";
  const errMessage = "FS operation failed";

  try {
    if (!existsSync(srcPath) || existsSync(copyPath)) {
      throw new Error(errMessage);
    }
    cp(srcPath, copyPath, { recursive: true });
  } catch (error) {
    console.error(error);
  }
};

await copy();
