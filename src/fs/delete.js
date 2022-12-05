import { existsSync, unlink } from "node:fs";

const remove = async () => {
  const removeFilePath = "src/fs/files/fileToRemove.txt";
  const errMessage = "FS operation failed";

  try {
    if (!existsSync(removeFilePath)) {
      throw new Error(errMessage);
    }
    unlink(removeFilePath,()=>{});
  } catch (error) {
    console.error(error);
  }
};

await remove();
