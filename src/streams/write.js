import { createWriteStream } from 'node:fs';
import { pipeline } from 'stream/promises';
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = __dirname +'/files/fileToWrite.txt';
    const writeStream = createWriteStream(filePath);

    await pipeline(process.stdin, writeStream);
};

await write();
