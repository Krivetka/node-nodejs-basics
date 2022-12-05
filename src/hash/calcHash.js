import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = __dirname + "/files/fileToCalculateHashFor.txt";
    const file = await readFile(filePath);
    const hash = createHash('sha256');
    const hex = hash.update(file).digest('hex');
    console.log(hex);
};

await calculateHash();
