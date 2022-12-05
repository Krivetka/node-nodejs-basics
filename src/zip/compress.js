import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { createGzip } from "node:zlib";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const source = __dirname + "/files/fileToCompress.txt";
  const destination = __dirname + "/files/archive.gz";
  const readFileStream = createReadStream(source);
  const gzip = createGzip();
  const writeFileStream = createWriteStream(destination);
  await pipeline(readFileStream, gzip, writeFileStream, (err) => {
    if (err) {
      process.stdout.write(errMessage);
    }
  });
};

await compress();
