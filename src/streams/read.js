import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = __dirname +'/files/fileToRead.txt';
    const readableStream = createReadStream(filePath);

    await pipeline(readableStream, process.stdout);
};

await read();
