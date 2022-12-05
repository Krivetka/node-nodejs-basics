import { cp } from "node:fs/promises";
import { existsSync } from "node:fs";

const copy = async () => {
  const srcPath = "src/fs/files";
  const copyPath = "src/fs//files_copy";
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
