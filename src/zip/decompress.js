import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const source = __dirname + "/files/archive.gz";
    const destination = __dirname + "/files/fileToCompress.txt";
    const errMessage = 'FS operation failed';
    const readFileStream = createReadStream(source);
    const writeFileStream = createWriteStream(destination);
    const gunzip = createGunzip();

    await pipeline(readFileStream, gunzip, writeFileStream, (err) => {
        if (err) {
            process.stdout.write(errMessage);
        }
    });
};

await decompress();
