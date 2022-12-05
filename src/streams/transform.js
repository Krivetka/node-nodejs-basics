import { pipeline } from 'node:stream/promises';
import { Transform } from 'node:stream';

const transform = async () => {
    const reverseData = new Transform({
        transform(chunk, _, cb) {
            cb(null, chunk.toString().split('').reverse().join(''));
        },
    });

    pipeline(process.stdin, reverseData, process.stdout);
};

await transform();
